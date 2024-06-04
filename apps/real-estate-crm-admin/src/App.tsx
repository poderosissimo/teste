import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { MaintenanceList } from "./maintenance/MaintenanceList";
import { MaintenanceCreate } from "./maintenance/MaintenanceCreate";
import { MaintenanceEdit } from "./maintenance/MaintenanceEdit";
import { MaintenanceShow } from "./maintenance/MaintenanceShow";
import { QualityList } from "./quality/QualityList";
import { QualityCreate } from "./quality/QualityCreate";
import { QualityEdit } from "./quality/QualityEdit";
import { QualityShow } from "./quality/QualityShow";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { ComplianceList } from "./compliance/ComplianceList";
import { ComplianceCreate } from "./compliance/ComplianceCreate";
import { ComplianceEdit } from "./compliance/ComplianceEdit";
import { ComplianceShow } from "./compliance/ComplianceShow";
import { InnovationList } from "./innovation/InnovationList";
import { InnovationCreate } from "./innovation/InnovationCreate";
import { InnovationEdit } from "./innovation/InnovationEdit";
import { InnovationShow } from "./innovation/InnovationShow";
import { RiskList } from "./risk/RiskList";
import { RiskCreate } from "./risk/RiskCreate";
import { RiskEdit } from "./risk/RiskEdit";
import { RiskShow } from "./risk/RiskShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { ContatoList } from "./contato/ContatoList";
import { ContatoCreate } from "./contato/ContatoCreate";
import { ContatoEdit } from "./contato/ContatoEdit";
import { ContatoShow } from "./contato/ContatoShow";
import { FornecedorList } from "./fornecedor/FornecedorList";
import { FornecedorCreate } from "./fornecedor/FornecedorCreate";
import { FornecedorEdit } from "./fornecedor/FornecedorEdit";
import { FornecedorShow } from "./fornecedor/FornecedorShow";
import { ContratoList } from "./contrato/ContratoList";
import { ContratoCreate } from "./contrato/ContratoCreate";
import { ContratoEdit } from "./contrato/ContratoEdit";
import { ContratoShow } from "./contrato/ContratoShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { ManutencaoList } from "./manutencao/ManutencaoList";
import { ManutencaoCreate } from "./manutencao/ManutencaoCreate";
import { ManutencaoEdit } from "./manutencao/ManutencaoEdit";
import { ManutencaoShow } from "./manutencao/ManutencaoShow";
import { ProjetoList } from "./projeto/ProjetoList";
import { ProjetoCreate } from "./projeto/ProjetoCreate";
import { ProjetoEdit } from "./projeto/ProjetoEdit";
import { ProjetoShow } from "./projeto/ProjetoShow";
import { TicketSuporteList } from "./ticketSuporte/TicketSuporteList";
import { TicketSuporteCreate } from "./ticketSuporte/TicketSuporteCreate";
import { TicketSuporteEdit } from "./ticketSuporte/TicketSuporteEdit";
import { TicketSuporteShow } from "./ticketSuporte/TicketSuporteShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { CampanhaMarketingList } from "./campanhaMarketing/CampanhaMarketingList";
import { CampanhaMarketingCreate } from "./campanhaMarketing/CampanhaMarketingCreate";
import { CampanhaMarketingEdit } from "./campanhaMarketing/CampanhaMarketingEdit";
import { CampanhaMarketingShow } from "./campanhaMarketing/CampanhaMarketingShow";
import { InovacaoList } from "./inovacao/InovacaoList";
import { InovacaoCreate } from "./inovacao/InovacaoCreate";
import { InovacaoEdit } from "./inovacao/InovacaoEdit";
import { InovacaoShow } from "./inovacao/InovacaoShow";
import { EquipamentoList } from "./equipamento/EquipamentoList";
import { EquipamentoCreate } from "./equipamento/EquipamentoCreate";
import { EquipamentoEdit } from "./equipamento/EquipamentoEdit";
import { EquipamentoShow } from "./equipamento/EquipamentoShow";
import { TarefaList } from "./tarefa/TarefaList";
import { TarefaCreate } from "./tarefa/TarefaCreate";
import { TarefaEdit } from "./tarefa/TarefaEdit";
import { TarefaShow } from "./tarefa/TarefaShow";
import { PropostaList } from "./proposta/PropostaList";
import { PropostaCreate } from "./proposta/PropostaCreate";
import { PropostaEdit } from "./proposta/PropostaEdit";
import { PropostaShow } from "./proposta/PropostaShow";
import { IdeiaList } from "./ideia/IdeiaList";
import { IdeiaCreate } from "./ideia/IdeiaCreate";
import { IdeiaEdit } from "./ideia/IdeiaEdit";
import { IdeiaShow } from "./ideia/IdeiaShow";
import { AprovacaoList } from "./aprovacao/AprovacaoList";
import { AprovacaoCreate } from "./aprovacao/AprovacaoCreate";
import { AprovacaoEdit } from "./aprovacao/AprovacaoEdit";
import { AprovacaoShow } from "./aprovacao/AprovacaoShow";
import { DocumentoList } from "./documento/DocumentoList";
import { DocumentoCreate } from "./documento/DocumentoCreate";
import { DocumentoEdit } from "./documento/DocumentoEdit";
import { DocumentoShow } from "./documento/DocumentoShow";
import { RiscoList } from "./risco/RiscoList";
import { RiscoCreate } from "./risco/RiscoCreate";
import { RiscoEdit } from "./risco/RiscoEdit";
import { RiscoShow } from "./risco/RiscoShow";
import { RelatorioList } from "./relatorio/RelatorioList";
import { RelatorioCreate } from "./relatorio/RelatorioCreate";
import { RelatorioEdit } from "./relatorio/RelatorioEdit";
import { RelatorioShow } from "./relatorio/RelatorioShow";
import { LeadCadastroList } from "./leadCadastro/LeadCadastroList";
import { LeadCadastroCreate } from "./leadCadastro/LeadCadastroCreate";
import { LeadCadastroEdit } from "./leadCadastro/LeadCadastroEdit";
import { LeadCadastroShow } from "./leadCadastro/LeadCadastroShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RealEstateCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="Maintenance"
          list={MaintenanceList}
          edit={MaintenanceEdit}
          create={MaintenanceCreate}
          show={MaintenanceShow}
        />
        <Resource
          name="Quality"
          list={QualityList}
          edit={QualityEdit}
          create={QualityCreate}
          show={QualityShow}
        />
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
        <Resource
          name="Compliance"
          list={ComplianceList}
          edit={ComplianceEdit}
          create={ComplianceCreate}
          show={ComplianceShow}
        />
        <Resource
          name="Innovation"
          list={InnovationList}
          edit={InnovationEdit}
          create={InnovationCreate}
          show={InnovationShow}
        />
        <Resource
          name="Risk"
          list={RiskList}
          edit={RiskEdit}
          create={RiskCreate}
          show={RiskShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="Contato"
          list={ContatoList}
          edit={ContatoEdit}
          create={ContatoCreate}
          show={ContatoShow}
        />
        <Resource
          name="Fornecedor"
          list={FornecedorList}
          edit={FornecedorEdit}
          create={FornecedorCreate}
          show={FornecedorShow}
        />
        <Resource
          name="Contrato"
          list={ContratoList}
          edit={ContratoEdit}
          create={ContratoCreate}
          show={ContratoShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Manutencao"
          list={ManutencaoList}
          edit={ManutencaoEdit}
          create={ManutencaoCreate}
          show={ManutencaoShow}
        />
        <Resource
          name="Projeto"
          list={ProjetoList}
          edit={ProjetoEdit}
          create={ProjetoCreate}
          show={ProjetoShow}
        />
        <Resource
          name="TicketSuporte"
          list={TicketSuporteList}
          edit={TicketSuporteEdit}
          create={TicketSuporteCreate}
          show={TicketSuporteShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="CampanhaMarketing"
          list={CampanhaMarketingList}
          edit={CampanhaMarketingEdit}
          create={CampanhaMarketingCreate}
          show={CampanhaMarketingShow}
        />
        <Resource
          name="Inovacao"
          list={InovacaoList}
          edit={InovacaoEdit}
          create={InovacaoCreate}
          show={InovacaoShow}
        />
        <Resource
          name="Equipamento"
          list={EquipamentoList}
          edit={EquipamentoEdit}
          create={EquipamentoCreate}
          show={EquipamentoShow}
        />
        <Resource
          name="Tarefa"
          list={TarefaList}
          edit={TarefaEdit}
          create={TarefaCreate}
          show={TarefaShow}
        />
        <Resource
          name="Proposta"
          list={PropostaList}
          edit={PropostaEdit}
          create={PropostaCreate}
          show={PropostaShow}
        />
        <Resource
          name="Ideia"
          list={IdeiaList}
          edit={IdeiaEdit}
          create={IdeiaCreate}
          show={IdeiaShow}
        />
        <Resource
          name="Aprovacao"
          list={AprovacaoList}
          edit={AprovacaoEdit}
          create={AprovacaoCreate}
          show={AprovacaoShow}
        />
        <Resource
          name="Documento"
          list={DocumentoList}
          edit={DocumentoEdit}
          create={DocumentoCreate}
          show={DocumentoShow}
        />
        <Resource
          name="Risco"
          list={RiscoList}
          edit={RiscoEdit}
          create={RiscoCreate}
          show={RiscoShow}
        />
        <Resource
          name="Relatorio"
          list={RelatorioList}
          edit={RelatorioEdit}
          create={RelatorioCreate}
          show={RelatorioShow}
        />
        <Resource
          name="LeadCadastro"
          list={LeadCadastroList}
          edit={LeadCadastroEdit}
          create={LeadCadastroCreate}
          show={LeadCadastroShow}
        />
      </Admin>
    </div>
  );
};

export default App;
