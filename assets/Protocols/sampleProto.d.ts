import * as $protobuf from "protobufjs";
export interface IMessage {
    className?: string;
    index?: number;
}

export namespace sampleProto {

    interface IRegisterNickNameReq extends IMessage {
        nickName?: (string|null);
    }

    class RegisterNickNameReq implements IRegisterNickNameReq {
        constructor(properties?: sampleProto.IRegisterNickNameReq);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public nickName: string;
        public static create(properties?: sampleProto.IRegisterNickNameReq): sampleProto.RegisterNickNameReq;
        public static encode(message: sampleProto.RegisterNickNameReq, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.RegisterNickNameReq;
    }

    interface IRegisterNickNameRes extends IMessage {
        isSuccess?: (boolean|null);
    }

    class RegisterNickNameRes implements IRegisterNickNameRes {
        constructor(properties?: sampleProto.IRegisterNickNameRes);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public isSuccess: boolean;
        public static create(properties?: sampleProto.IRegisterNickNameRes): sampleProto.RegisterNickNameRes;
        public static encode(message: sampleProto.RegisterNickNameRes, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.RegisterNickNameRes;
    }

    interface IChatMessageToS extends IMessage {
        message?: (string|null);
    }

    class ChatMessageToS implements IChatMessageToS {
        constructor(properties?: sampleProto.IChatMessageToS);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.IChatMessageToS): sampleProto.ChatMessageToS;
        public static encode(message: sampleProto.ChatMessageToS, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.ChatMessageToS;
    }

    interface IChatMessageToC extends IMessage {
        message?: (string|null);
    }

    class ChatMessageToC implements IChatMessageToC {
        constructor(properties?: sampleProto.IChatMessageToC);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.IChatMessageToC): sampleProto.ChatMessageToC;
        public static encode(message: sampleProto.ChatMessageToC, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.ChatMessageToC;
    }

    interface IGameMessageToS extends IMessage {
        message?: (string|null);
    }

    class GameMessageToS implements IGameMessageToS {
        constructor(properties?: sampleProto.IGameMessageToS);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.IGameMessageToS): sampleProto.GameMessageToS;
        public static encode(message: sampleProto.GameMessageToS, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.GameMessageToS;
    }

    interface IGameMessageToC extends IMessage {
        message?: (string|null);
    }

    class GameMessageToC implements IGameMessageToC {
        constructor(properties?: sampleProto.IGameMessageToC);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.IGameMessageToC): sampleProto.GameMessageToC;
        public static encode(message: sampleProto.GameMessageToC, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.GameMessageToC;
    }

    interface ISampleData extends IMessage {
        message?: (string|null);
    }

    class SampleData implements ISampleData {
        constructor(properties?: sampleProto.ISampleData);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.ISampleData): sampleProto.SampleData;
        public static encode(message: sampleProto.SampleData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleData;
    }

    interface ISampleReq extends IMessage {
        message?: (string|null);
    }

    class SampleReq implements ISampleReq {
        constructor(properties?: sampleProto.ISampleReq);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.ISampleReq): sampleProto.SampleReq;
        public static encode(message: sampleProto.SampleReq, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleReq;
    }

    interface ISampleRes extends IMessage {
        message?: (string|null);
    }

    class SampleRes implements ISampleRes {
        constructor(properties?: sampleProto.ISampleRes);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.ISampleRes): sampleProto.SampleRes;
        public static encode(message: sampleProto.SampleRes, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleRes;
    }

    interface ISampleToS extends IMessage {
        message?: (string|null);
    }

    class SampleToS implements ISampleToS {
        constructor(properties?: sampleProto.ISampleToS);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.ISampleToS): sampleProto.SampleToS;
        public static encode(message: sampleProto.SampleToS, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleToS;
    }

    interface ISampleToC extends IMessage {
        message?: (string|null);
    }

    class SampleToC implements ISampleToC {
        constructor(properties?: sampleProto.ISampleToC);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public message: string;
        public static create(properties?: sampleProto.ISampleToC): sampleProto.SampleToC;
        public static encode(message: sampleProto.SampleToC, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleToC;
    }

    interface ISampleToSpot extends IMessage {
        from?: (string|null);
        message?: (string|null);
    }

    class SampleToSpot implements ISampleToSpot {
        constructor(properties?: sampleProto.ISampleToSpot);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public from: string;
        public message: string;
        public static create(properties?: sampleProto.ISampleToSpot): sampleProto.SampleToSpot;
        public static encode(message: sampleProto.SampleToSpot, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SampleToSpot;
    }

    interface IResetSpot extends IMessage {
        count?: (number|null);
    }

    class ResetSpot implements IResetSpot {
        constructor(properties?: sampleProto.IResetSpot);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public count: number;
        public static create(properties?: sampleProto.IResetSpot): sampleProto.ResetSpot;
        public static encode(message: sampleProto.ResetSpot, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.ResetSpot;
    }

    interface ISetTimer extends IMessage {
        interval?: (number|null);
        message?: (string|null);
    }

    class SetTimer implements ISetTimer {
        constructor(properties?: sampleProto.ISetTimer);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public interval: number;
        public message: string;
        public static create(properties?: sampleProto.ISetTimer): sampleProto.SetTimer;
        public static encode(message: sampleProto.SetTimer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.SetTimer;
    }

    interface IRemoveTimer extends IMessage {
    }

    class RemoveTimer implements IRemoveTimer {
        constructor(properties?: sampleProto.IRemoveTimer);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public static create(properties?: sampleProto.IRemoveTimer): sampleProto.RemoveTimer;
        public static encode(message: sampleProto.RemoveTimer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.RemoveTimer;
    }

    interface IUserInfo extends IMessage {
        nickName?: (string|null);
    }

    class UserInfo implements IUserInfo {
        constructor(properties?: sampleProto.IUserInfo);
        public static className: string;
        public static index: number;
        public className: string;
        public index: number;
        public nickName: string;
        public static create(properties?: sampleProto.IUserInfo): sampleProto.UserInfo;
        public static encode(message: sampleProto.UserInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sampleProto.UserInfo;
    }
}
