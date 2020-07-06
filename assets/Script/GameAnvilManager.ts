/*
    IE등 구버전 브라우저에서 Connector를 사용하기 위해서는 
    core-js, regenerator-runtime 등의 플러그인을 사용해야 한다.
*/
import 'core-js';
import 'regenerator-runtime';

import { sampleProto } from '../Protocols/sampleProto';
import { Connector, ProtocolManager } from 'gameanvil-connector';

/*
    GameAnvil Connector를 관리하기 위한 Manager 클래스.
    
*/
export default class GameAnvilManager {
    private static manager: GameAnvilManager;
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
            this.manager = new GameAnvilManager();
        }
        return this.manager;
    }

    // ConnectionAgent, UserAgent를 이용할 때 모든 결과는 callback을 통해 알 수 있습니다.
    // IConnectionListener, IUserListener를 구현해 모든 콜백을 전달 받을 객체를 만들고, 
    // ConnectionAgent.AddListener(), UserAgent.AddListener()를 이용하여 등록할 수 있습니다.
    // 또는 각 API에 직접 callback을 전달할 수도 있습니다. 
    // 경우에 따라 두가지 방식을 병행해서 사용할 수도 있으며 
    // 컨텐츠 구현에따라 편한 방식을 사용하면 됩니다. 
    GetConnectionAgent() {
        // ConnectionAgent는 Connector 생성시 자동 생성됩니다.
        // GetConnectionAgent()를 이용해 생성된 ConnectionAgent를 가져와 사용할 수 있습니다.
        return this.connector.GetConnectionAgent();
    }

    GetUserAgent(serviceName: string) {
        // GetUserAgent()를 이용해 생성된 ConnectionAgent를 가져와 사용할 수 있습니다.
        // GetUserAgent(serviceName: string, subId: string): UserAgent;
        //  serviceName : 서버에 등록한 serviceName.
        //  subId : UserAgent를 만들때 사용한 subId.
        // UserAgent는 ConnectionAgent와 달리 자동 생성되지 않습니다. 
        // 생성된 UserAgent가 없을 경우 null을 리턴합니다.
        return this.connector.GetUserAgent(serviceName, 1);
    }

    CreateUserAgent(serviceName: string) {
        // CreateUserAgent()를 이용해 UserAgent를 생성합니다.
        // CreateUserAgent(serviceName: string, subId: string): UserAgent;
        //  serviceName : 서버에 등록한 serviceName.
        //  subId : 사용할 subId. 같은 service를 사용할 UserAgent를 여러개 만들 경우 사용합니다.
        // UserAgent는 ConnectionAgent와 달리 자동 생성되지 않습니다. 
        // 생성된 UserAgent가 없을 경우 null을 리턴합니다.
        return this.connector.CreateUserAgent(serviceName, 1);
    }
}