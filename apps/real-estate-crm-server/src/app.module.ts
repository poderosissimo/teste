import { Module } from "@nestjs/common";
import { AgentModule } from "./agent/agent.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { PropertyModule } from "./property/property.module";
import { ClientModule } from "./client/client.module";
import { ProjectModule } from "./project/project.module";
import { CampaignModule } from "./campaign/campaign.module";
import { LeadModule } from "./lead/lead.module";
import { TaskModule } from "./task/task.module";
import { TicketModule } from "./ticket/ticket.module";
import { ContractModule } from "./contract/contract.module";
import { ResourceModule } from "./resource/resource.module";
import { MaintenanceModule } from "./maintenance/maintenance.module";
import { QualityModule } from "./quality/quality.module";
import { CommunicationModule } from "./communication/communication.module";
import { ApprovalModule } from "./approval/approval.module";
import { ComplianceModule } from "./compliance/compliance.module";
import { InnovationModule } from "./innovation/innovation.module";
import { RiskModule } from "./risk/risk.module";
import { SupplierModule } from "./supplier/supplier.module";
import { ClienteModule } from "./cliente/cliente.module";
import { ContatoModule } from "./contato/contato.module";
import { FornecedorModule } from "./fornecedor/fornecedor.module";
import { ContratoModule } from "./contrato/contrato.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { ManutencaoModule } from "./manutencao/manutencao.module";
import { ProjetoModule } from "./projeto/projeto.module";
import { TicketSuporteModule } from "./ticketSuporte/ticketSuporte.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { CampanhaMarketingModule } from "./campanhaMarketing/campanhaMarketing.module";
import { InovacaoModule } from "./inovacao/inovacao.module";
import { EquipamentoModule } from "./equipamento/equipamento.module";
import { TarefaModule } from "./tarefa/tarefa.module";
import { PropostaModule } from "./proposta/proposta.module";
import { IdeiaModule } from "./ideia/ideia.module";
import { AprovacaoModule } from "./aprovacao/aprovacao.module";
import { DocumentoModule } from "./documento/documento.module";
import { RiscoModule } from "./risco/risco.module";
import { RelatorioModule } from "./relatorio/relatorio.module";
import { LeadCadastroModule } from "./leadCadastro/leadCadastro.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AgentModule,
    AppointmentModule,
    PropertyModule,
    ClientModule,
    ProjectModule,
    CampaignModule,
    LeadModule,
    TaskModule,
    TicketModule,
    ContractModule,
    ResourceModule,
    MaintenanceModule,
    QualityModule,
    CommunicationModule,
    ApprovalModule,
    ComplianceModule,
    InnovationModule,
    RiskModule,
    SupplierModule,
    ClienteModule,
    ContatoModule,
    FornecedorModule,
    ContratoModule,
    FeedbackModule,
    ManutencaoModule,
    ProjetoModule,
    TicketSuporteModule,
    UsuarioModule,
    CampanhaMarketingModule,
    InovacaoModule,
    EquipamentoModule,
    TarefaModule,
    PropostaModule,
    IdeiaModule,
    AprovacaoModule,
    DocumentoModule,
    RiscoModule,
    RelatorioModule,
    LeadCadastroModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
