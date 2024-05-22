import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LeadCadastroController } from "../leadCadastro.controller";
import { LeadCadastroService } from "../leadCadastro.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contato: "exampleContato",
  createdAt: new Date(),
  dataCriacao: new Date(),
  email: "exampleEmail",
  empresa: "exampleEmpresa",
  fonteDoLead: "exampleFonteDoLead",
  id: "exampleId",
  nome: "exampleNome",
  responsavel: "exampleResponsavel",
  ultimaAtualizacao: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contato: "exampleContato",
  createdAt: new Date(),
  dataCriacao: new Date(),
  email: "exampleEmail",
  empresa: "exampleEmpresa",
  fonteDoLead: "exampleFonteDoLead",
  id: "exampleId",
  nome: "exampleNome",
  responsavel: "exampleResponsavel",
  ultimaAtualizacao: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contato: "exampleContato",
    createdAt: new Date(),
    dataCriacao: new Date(),
    email: "exampleEmail",
    empresa: "exampleEmpresa",
    fonteDoLead: "exampleFonteDoLead",
    id: "exampleId",
    nome: "exampleNome",
    responsavel: "exampleResponsavel",
    ultimaAtualizacao: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contato: "exampleContato",
  createdAt: new Date(),
  dataCriacao: new Date(),
  email: "exampleEmail",
  empresa: "exampleEmpresa",
  fonteDoLead: "exampleFonteDoLead",
  id: "exampleId",
  nome: "exampleNome",
  responsavel: "exampleResponsavel",
  ultimaAtualizacao: new Date(),
  updatedAt: new Date(),
};

const service = {
  createLeadCadastro() {
    return CREATE_RESULT;
  },
  leadCadastros: () => FIND_MANY_RESULT,
  leadCadastro: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("LeadCadastro", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LeadCadastroService,
          useValue: service,
        },
      ],
      controllers: [LeadCadastroController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /leadCadastros", async () => {
    await request(app.getHttpServer())
      .post("/leadCadastros")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataCriacao: CREATE_RESULT.dataCriacao.toISOString(),
        ultimaAtualizacao: CREATE_RESULT.ultimaAtualizacao.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /leadCadastros", async () => {
    await request(app.getHttpServer())
      .get("/leadCadastros")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataCriacao: FIND_MANY_RESULT[0].dataCriacao.toISOString(),
          ultimaAtualizacao:
            FIND_MANY_RESULT[0].ultimaAtualizacao.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /leadCadastros/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leadCadastros"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /leadCadastros/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leadCadastros"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataCriacao: FIND_ONE_RESULT.dataCriacao.toISOString(),
        ultimaAtualizacao: FIND_ONE_RESULT.ultimaAtualizacao.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /leadCadastros existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/leadCadastros")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataCriacao: CREATE_RESULT.dataCriacao.toISOString(),
        ultimaAtualizacao: CREATE_RESULT.ultimaAtualizacao.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/leadCadastros")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
