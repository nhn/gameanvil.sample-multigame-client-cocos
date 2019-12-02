import { sampleProto } from '../Protocols/sampleProto'
import { Connector, ProtocolManager, Config } from 'ngt_connector'

/*
    Tardis Connector를 관리하기 위한 Manager 클래스.
    
*/
export default class TardisManager {
    private static manager: TardisManager;
    private connector: Connector;
    private constructor() {
        // 사용할 프로토콜을 등록. 
        // 서버에서도 프로토콜 등록을 해야 하며 ProtocolID가 서버와 같아야 한다.
        // 여러개의 프로토콜을 등록 할 수 있다.
        ProtocolManager.RegisterProtocol(0, sampleProto);

        // Connector 생성.
        this.connector = Connector.Create();

        // message loop. 10ms 마다 호출.
        let updater = setInterval(() => { this.connector.Update(); }, 10);
    }

    static GetInstance() {
        if (this.manager == null) {
            this.manager = new TardisManager();
        }
        return this.manager;
    }

    GetUser(serviceName: string) {
        return this.connector.GetUserAgent(serviceName, "");
    }

    CreateUser(serviceName: string) {
        return this.connector.CreateUserAgent(serviceName, "");
    }

    GetSession() {
        return this.connector.GetSessionAgent();
    }
}