/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots.base || ($protobuf.roots.base = {});
    /**
     * IMessage Interfase
     * @interface IMessage
     * @property {string} [className]
     * @property {number} [index]
     */
    
    $root.sampleProto = (function() {
    
        /**
         * Namespace sampleProto.
         * @exports sampleProto
         * @namespace
         */
        var sampleProto = {};
    
        sampleProto.RegisterNickNameReq = (function() {
    
            /**
             * Properties of a RegisterNickNameReq.
             * @memberof sampleProto
             * @interface IRegisterNickNameReq
             * @extends IMessage
             * @property {string|null} [nickName] RegisterNickNameReq nickName
             */
    
            /**
             * Constructs a new RegisterNickNameReq.
             * @memberof sampleProto
             * @classdesc Represents a RegisterNickNameReq.
             * @implements IRegisterNickNameReq
             * @constructor
             * @param {sampleProto.IRegisterNickNameReq=} [properties] Properties to set
             */
            function RegisterNickNameReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RegisterNickNameReq
             * @static
             */
            RegisterNickNameReq.className = "RegisterNickNameReq";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RegisterNickNameReq
             * @static
             */
            RegisterNickNameReq.index = 0;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RegisterNickNameReq
             * @instance
             */
            RegisterNickNameReq.prototype.className = "RegisterNickNameReq";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RegisterNickNameReq
             * @instance
             */
            RegisterNickNameReq.prototype.index = 0;
    
            /**
             * RegisterNickNameReq nickName.
             * @member {string} nickName
             * @memberof sampleProto.RegisterNickNameReq
             * @instance
             */
            RegisterNickNameReq.prototype.nickName = "";
    
            /**
             * Creates a new RegisterNickNameReq instance using the specified properties.
             * @function create
             * @memberof sampleProto.RegisterNickNameReq
             * @static
             * @param {sampleProto.IRegisterNickNameReq=} [properties] Properties to set
             * @returns {sampleProto.RegisterNickNameReq} RegisterNickNameReq instance
             */
            RegisterNickNameReq.create = function create(properties) {
                return new RegisterNickNameReq(properties);
            };
    
            /**
             * Encodes the specified RegisterNickNameReq message. Does not implicitly {@link sampleProto.RegisterNickNameReq.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.RegisterNickNameReq
             * @static
             * @param {sampleProto.RegisterNickNameReq} message RegisterNickNameReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterNickNameReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
                return writer;
            };
    
            /**
             * Decodes a RegisterNickNameReq message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.RegisterNickNameReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.RegisterNickNameReq} RegisterNickNameReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterNickNameReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.RegisterNickNameReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return RegisterNickNameReq;
        })();
    
        sampleProto.RegisterNickNameRes = (function() {
    
            /**
             * Properties of a RegisterNickNameRes.
             * @memberof sampleProto
             * @interface IRegisterNickNameRes
             * @extends IMessage
             * @property {boolean|null} [isSuccess] RegisterNickNameRes isSuccess
             */
    
            /**
             * Constructs a new RegisterNickNameRes.
             * @memberof sampleProto
             * @classdesc Represents a RegisterNickNameRes.
             * @implements IRegisterNickNameRes
             * @constructor
             * @param {sampleProto.IRegisterNickNameRes=} [properties] Properties to set
             */
            function RegisterNickNameRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RegisterNickNameRes
             * @static
             */
            RegisterNickNameRes.className = "RegisterNickNameRes";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RegisterNickNameRes
             * @static
             */
            RegisterNickNameRes.index = 1;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RegisterNickNameRes
             * @instance
             */
            RegisterNickNameRes.prototype.className = "RegisterNickNameRes";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RegisterNickNameRes
             * @instance
             */
            RegisterNickNameRes.prototype.index = 1;
    
            /**
             * RegisterNickNameRes isSuccess.
             * @member {boolean} isSuccess
             * @memberof sampleProto.RegisterNickNameRes
             * @instance
             */
            RegisterNickNameRes.prototype.isSuccess = false;
    
            /**
             * Creates a new RegisterNickNameRes instance using the specified properties.
             * @function create
             * @memberof sampleProto.RegisterNickNameRes
             * @static
             * @param {sampleProto.IRegisterNickNameRes=} [properties] Properties to set
             * @returns {sampleProto.RegisterNickNameRes} RegisterNickNameRes instance
             */
            RegisterNickNameRes.create = function create(properties) {
                return new RegisterNickNameRes(properties);
            };
    
            /**
             * Encodes the specified RegisterNickNameRes message. Does not implicitly {@link sampleProto.RegisterNickNameRes.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.RegisterNickNameRes
             * @static
             * @param {sampleProto.RegisterNickNameRes} message RegisterNickNameRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterNickNameRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isSuccess != null && message.hasOwnProperty("isSuccess"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isSuccess);
                return writer;
            };
    
            /**
             * Decodes a RegisterNickNameRes message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.RegisterNickNameRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.RegisterNickNameRes} RegisterNickNameRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterNickNameRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.RegisterNickNameRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isSuccess = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return RegisterNickNameRes;
        })();
    
        sampleProto.ChatMessageToS = (function() {
    
            /**
             * Properties of a ChatMessageToS.
             * @memberof sampleProto
             * @interface IChatMessageToS
             * @extends IMessage
             * @property {string|null} [message] ChatMessageToS message
             */
    
            /**
             * Constructs a new ChatMessageToS.
             * @memberof sampleProto
             * @classdesc Represents a ChatMessageToS.
             * @implements IChatMessageToS
             * @constructor
             * @param {sampleProto.IChatMessageToS=} [properties] Properties to set
             */
            function ChatMessageToS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ChatMessageToS
             * @static
             */
            ChatMessageToS.className = "ChatMessageToS";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ChatMessageToS
             * @static
             */
            ChatMessageToS.index = 2;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ChatMessageToS
             * @instance
             */
            ChatMessageToS.prototype.className = "ChatMessageToS";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ChatMessageToS
             * @instance
             */
            ChatMessageToS.prototype.index = 2;
    
            /**
             * ChatMessageToS message.
             * @member {string} message
             * @memberof sampleProto.ChatMessageToS
             * @instance
             */
            ChatMessageToS.prototype.message = "";
    
            /**
             * Creates a new ChatMessageToS instance using the specified properties.
             * @function create
             * @memberof sampleProto.ChatMessageToS
             * @static
             * @param {sampleProto.IChatMessageToS=} [properties] Properties to set
             * @returns {sampleProto.ChatMessageToS} ChatMessageToS instance
             */
            ChatMessageToS.create = function create(properties) {
                return new ChatMessageToS(properties);
            };
    
            /**
             * Encodes the specified ChatMessageToS message. Does not implicitly {@link sampleProto.ChatMessageToS.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.ChatMessageToS
             * @static
             * @param {sampleProto.ChatMessageToS} message ChatMessageToS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessageToS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a ChatMessageToS message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.ChatMessageToS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.ChatMessageToS} ChatMessageToS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessageToS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.ChatMessageToS();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return ChatMessageToS;
        })();
    
        sampleProto.ChatMessageToC = (function() {
    
            /**
             * Properties of a ChatMessageToC.
             * @memberof sampleProto
             * @interface IChatMessageToC
             * @extends IMessage
             * @property {string|null} [message] ChatMessageToC message
             */
    
            /**
             * Constructs a new ChatMessageToC.
             * @memberof sampleProto
             * @classdesc Represents a ChatMessageToC.
             * @implements IChatMessageToC
             * @constructor
             * @param {sampleProto.IChatMessageToC=} [properties] Properties to set
             */
            function ChatMessageToC(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ChatMessageToC
             * @static
             */
            ChatMessageToC.className = "ChatMessageToC";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ChatMessageToC
             * @static
             */
            ChatMessageToC.index = 3;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ChatMessageToC
             * @instance
             */
            ChatMessageToC.prototype.className = "ChatMessageToC";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ChatMessageToC
             * @instance
             */
            ChatMessageToC.prototype.index = 3;
    
            /**
             * ChatMessageToC message.
             * @member {string} message
             * @memberof sampleProto.ChatMessageToC
             * @instance
             */
            ChatMessageToC.prototype.message = "";
    
            /**
             * Creates a new ChatMessageToC instance using the specified properties.
             * @function create
             * @memberof sampleProto.ChatMessageToC
             * @static
             * @param {sampleProto.IChatMessageToC=} [properties] Properties to set
             * @returns {sampleProto.ChatMessageToC} ChatMessageToC instance
             */
            ChatMessageToC.create = function create(properties) {
                return new ChatMessageToC(properties);
            };
    
            /**
             * Encodes the specified ChatMessageToC message. Does not implicitly {@link sampleProto.ChatMessageToC.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.ChatMessageToC
             * @static
             * @param {sampleProto.ChatMessageToC} message ChatMessageToC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessageToC.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a ChatMessageToC message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.ChatMessageToC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.ChatMessageToC} ChatMessageToC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessageToC.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.ChatMessageToC();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return ChatMessageToC;
        })();
    
        sampleProto.GameMessageToS = (function() {
    
            /**
             * Properties of a GameMessageToS.
             * @memberof sampleProto
             * @interface IGameMessageToS
             * @extends IMessage
             * @property {string|null} [message] GameMessageToS message
             */
    
            /**
             * Constructs a new GameMessageToS.
             * @memberof sampleProto
             * @classdesc Represents a GameMessageToS.
             * @implements IGameMessageToS
             * @constructor
             * @param {sampleProto.IGameMessageToS=} [properties] Properties to set
             */
            function GameMessageToS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.GameMessageToS
             * @static
             */
            GameMessageToS.className = "GameMessageToS";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.GameMessageToS
             * @static
             */
            GameMessageToS.index = 4;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.GameMessageToS
             * @instance
             */
            GameMessageToS.prototype.className = "GameMessageToS";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.GameMessageToS
             * @instance
             */
            GameMessageToS.prototype.index = 4;
    
            /**
             * GameMessageToS message.
             * @member {string} message
             * @memberof sampleProto.GameMessageToS
             * @instance
             */
            GameMessageToS.prototype.message = "";
    
            /**
             * Creates a new GameMessageToS instance using the specified properties.
             * @function create
             * @memberof sampleProto.GameMessageToS
             * @static
             * @param {sampleProto.IGameMessageToS=} [properties] Properties to set
             * @returns {sampleProto.GameMessageToS} GameMessageToS instance
             */
            GameMessageToS.create = function create(properties) {
                return new GameMessageToS(properties);
            };
    
            /**
             * Encodes the specified GameMessageToS message. Does not implicitly {@link sampleProto.GameMessageToS.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.GameMessageToS
             * @static
             * @param {sampleProto.GameMessageToS} message GameMessageToS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameMessageToS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a GameMessageToS message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.GameMessageToS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.GameMessageToS} GameMessageToS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameMessageToS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.GameMessageToS();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return GameMessageToS;
        })();
    
        sampleProto.GameMessageToC = (function() {
    
            /**
             * Properties of a GameMessageToC.
             * @memberof sampleProto
             * @interface IGameMessageToC
             * @extends IMessage
             * @property {string|null} [message] GameMessageToC message
             */
    
            /**
             * Constructs a new GameMessageToC.
             * @memberof sampleProto
             * @classdesc Represents a GameMessageToC.
             * @implements IGameMessageToC
             * @constructor
             * @param {sampleProto.IGameMessageToC=} [properties] Properties to set
             */
            function GameMessageToC(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.GameMessageToC
             * @static
             */
            GameMessageToC.className = "GameMessageToC";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.GameMessageToC
             * @static
             */
            GameMessageToC.index = 5;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.GameMessageToC
             * @instance
             */
            GameMessageToC.prototype.className = "GameMessageToC";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.GameMessageToC
             * @instance
             */
            GameMessageToC.prototype.index = 5;
    
            /**
             * GameMessageToC message.
             * @member {string} message
             * @memberof sampleProto.GameMessageToC
             * @instance
             */
            GameMessageToC.prototype.message = "";
    
            /**
             * Creates a new GameMessageToC instance using the specified properties.
             * @function create
             * @memberof sampleProto.GameMessageToC
             * @static
             * @param {sampleProto.IGameMessageToC=} [properties] Properties to set
             * @returns {sampleProto.GameMessageToC} GameMessageToC instance
             */
            GameMessageToC.create = function create(properties) {
                return new GameMessageToC(properties);
            };
    
            /**
             * Encodes the specified GameMessageToC message. Does not implicitly {@link sampleProto.GameMessageToC.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.GameMessageToC
             * @static
             * @param {sampleProto.GameMessageToC} message GameMessageToC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameMessageToC.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a GameMessageToC message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.GameMessageToC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.GameMessageToC} GameMessageToC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameMessageToC.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.GameMessageToC();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return GameMessageToC;
        })();
    
        sampleProto.SampleData = (function() {
    
            /**
             * Properties of a SampleData.
             * @memberof sampleProto
             * @interface ISampleData
             * @extends IMessage
             * @property {string|null} [message] SampleData message
             */
    
            /**
             * Constructs a new SampleData.
             * @memberof sampleProto
             * @classdesc Represents a SampleData.
             * @implements ISampleData
             * @constructor
             * @param {sampleProto.ISampleData=} [properties] Properties to set
             */
            function SampleData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleData
             * @static
             */
            SampleData.className = "SampleData";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleData
             * @static
             */
            SampleData.index = 6;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleData
             * @instance
             */
            SampleData.prototype.className = "SampleData";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleData
             * @instance
             */
            SampleData.prototype.index = 6;
    
            /**
             * SampleData message.
             * @member {string} message
             * @memberof sampleProto.SampleData
             * @instance
             */
            SampleData.prototype.message = "";
    
            /**
             * Creates a new SampleData instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleData
             * @static
             * @param {sampleProto.ISampleData=} [properties] Properties to set
             * @returns {sampleProto.SampleData} SampleData instance
             */
            SampleData.create = function create(properties) {
                return new SampleData(properties);
            };
    
            /**
             * Encodes the specified SampleData message. Does not implicitly {@link sampleProto.SampleData.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleData
             * @static
             * @param {sampleProto.SampleData} message SampleData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleData message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleData} SampleData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleData;
        })();
    
        sampleProto.SampleReq = (function() {
    
            /**
             * Properties of a SampleReq.
             * @memberof sampleProto
             * @interface ISampleReq
             * @extends IMessage
             * @property {string|null} [message] SampleReq message
             */
    
            /**
             * Constructs a new SampleReq.
             * @memberof sampleProto
             * @classdesc Represents a SampleReq.
             * @implements ISampleReq
             * @constructor
             * @param {sampleProto.ISampleReq=} [properties] Properties to set
             */
            function SampleReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleReq
             * @static
             */
            SampleReq.className = "SampleReq";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleReq
             * @static
             */
            SampleReq.index = 7;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleReq
             * @instance
             */
            SampleReq.prototype.className = "SampleReq";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleReq
             * @instance
             */
            SampleReq.prototype.index = 7;
    
            /**
             * SampleReq message.
             * @member {string} message
             * @memberof sampleProto.SampleReq
             * @instance
             */
            SampleReq.prototype.message = "";
    
            /**
             * Creates a new SampleReq instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleReq
             * @static
             * @param {sampleProto.ISampleReq=} [properties] Properties to set
             * @returns {sampleProto.SampleReq} SampleReq instance
             */
            SampleReq.create = function create(properties) {
                return new SampleReq(properties);
            };
    
            /**
             * Encodes the specified SampleReq message. Does not implicitly {@link sampleProto.SampleReq.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleReq
             * @static
             * @param {sampleProto.SampleReq} message SampleReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleReq message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleReq} SampleReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleReq;
        })();
    
        sampleProto.SampleRes = (function() {
    
            /**
             * Properties of a SampleRes.
             * @memberof sampleProto
             * @interface ISampleRes
             * @extends IMessage
             * @property {string|null} [message] SampleRes message
             */
    
            /**
             * Constructs a new SampleRes.
             * @memberof sampleProto
             * @classdesc Represents a SampleRes.
             * @implements ISampleRes
             * @constructor
             * @param {sampleProto.ISampleRes=} [properties] Properties to set
             */
            function SampleRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleRes
             * @static
             */
            SampleRes.className = "SampleRes";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleRes
             * @static
             */
            SampleRes.index = 8;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleRes
             * @instance
             */
            SampleRes.prototype.className = "SampleRes";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleRes
             * @instance
             */
            SampleRes.prototype.index = 8;
    
            /**
             * SampleRes message.
             * @member {string} message
             * @memberof sampleProto.SampleRes
             * @instance
             */
            SampleRes.prototype.message = "";
    
            /**
             * Creates a new SampleRes instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleRes
             * @static
             * @param {sampleProto.ISampleRes=} [properties] Properties to set
             * @returns {sampleProto.SampleRes} SampleRes instance
             */
            SampleRes.create = function create(properties) {
                return new SampleRes(properties);
            };
    
            /**
             * Encodes the specified SampleRes message. Does not implicitly {@link sampleProto.SampleRes.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleRes
             * @static
             * @param {sampleProto.SampleRes} message SampleRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleRes message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleRes} SampleRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleRes;
        })();
    
        sampleProto.SampleToS = (function() {
    
            /**
             * Properties of a SampleToS.
             * @memberof sampleProto
             * @interface ISampleToS
             * @extends IMessage
             * @property {string|null} [message] SampleToS message
             */
    
            /**
             * Constructs a new SampleToS.
             * @memberof sampleProto
             * @classdesc Represents a SampleToS.
             * @implements ISampleToS
             * @constructor
             * @param {sampleProto.ISampleToS=} [properties] Properties to set
             */
            function SampleToS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToS
             * @static
             */
            SampleToS.className = "SampleToS";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToS
             * @static
             */
            SampleToS.index = 9;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToS
             * @instance
             */
            SampleToS.prototype.className = "SampleToS";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToS
             * @instance
             */
            SampleToS.prototype.index = 9;
    
            /**
             * SampleToS message.
             * @member {string} message
             * @memberof sampleProto.SampleToS
             * @instance
             */
            SampleToS.prototype.message = "";
    
            /**
             * Creates a new SampleToS instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleToS
             * @static
             * @param {sampleProto.ISampleToS=} [properties] Properties to set
             * @returns {sampleProto.SampleToS} SampleToS instance
             */
            SampleToS.create = function create(properties) {
                return new SampleToS(properties);
            };
    
            /**
             * Encodes the specified SampleToS message. Does not implicitly {@link sampleProto.SampleToS.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleToS
             * @static
             * @param {sampleProto.SampleToS} message SampleToS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleToS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleToS message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleToS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleToS} SampleToS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleToS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleToS();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleToS;
        })();
    
        sampleProto.SampleToC = (function() {
    
            /**
             * Properties of a SampleToC.
             * @memberof sampleProto
             * @interface ISampleToC
             * @extends IMessage
             * @property {string|null} [message] SampleToC message
             */
    
            /**
             * Constructs a new SampleToC.
             * @memberof sampleProto
             * @classdesc Represents a SampleToC.
             * @implements ISampleToC
             * @constructor
             * @param {sampleProto.ISampleToC=} [properties] Properties to set
             */
            function SampleToC(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToC
             * @static
             */
            SampleToC.className = "SampleToC";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToC
             * @static
             */
            SampleToC.index = 10;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToC
             * @instance
             */
            SampleToC.prototype.className = "SampleToC";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToC
             * @instance
             */
            SampleToC.prototype.index = 10;
    
            /**
             * SampleToC message.
             * @member {string} message
             * @memberof sampleProto.SampleToC
             * @instance
             */
            SampleToC.prototype.message = "";
    
            /**
             * Creates a new SampleToC instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleToC
             * @static
             * @param {sampleProto.ISampleToC=} [properties] Properties to set
             * @returns {sampleProto.SampleToC} SampleToC instance
             */
            SampleToC.create = function create(properties) {
                return new SampleToC(properties);
            };
    
            /**
             * Encodes the specified SampleToC message. Does not implicitly {@link sampleProto.SampleToC.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleToC
             * @static
             * @param {sampleProto.SampleToC} message SampleToC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleToC.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleToC message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleToC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleToC} SampleToC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleToC.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleToC();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleToC;
        })();
    
        sampleProto.SampleToSpot = (function() {
    
            /**
             * Properties of a SampleToSpot.
             * @memberof sampleProto
             * @interface ISampleToSpot
             * @extends IMessage
             * @property {string|null} [from] SampleToSpot from
             * @property {string|null} [message] SampleToSpot message
             */
    
            /**
             * Constructs a new SampleToSpot.
             * @memberof sampleProto
             * @classdesc Represents a SampleToSpot.
             * @implements ISampleToSpot
             * @constructor
             * @param {sampleProto.ISampleToSpot=} [properties] Properties to set
             */
            function SampleToSpot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToSpot
             * @static
             */
            SampleToSpot.className = "SampleToSpot";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToSpot
             * @static
             */
            SampleToSpot.index = 11;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SampleToSpot
             * @instance
             */
            SampleToSpot.prototype.className = "SampleToSpot";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SampleToSpot
             * @instance
             */
            SampleToSpot.prototype.index = 11;
    
            /**
             * SampleToSpot from.
             * @member {string} from
             * @memberof sampleProto.SampleToSpot
             * @instance
             */
            SampleToSpot.prototype.from = "";
    
            /**
             * SampleToSpot message.
             * @member {string} message
             * @memberof sampleProto.SampleToSpot
             * @instance
             */
            SampleToSpot.prototype.message = "";
    
            /**
             * Creates a new SampleToSpot instance using the specified properties.
             * @function create
             * @memberof sampleProto.SampleToSpot
             * @static
             * @param {sampleProto.ISampleToSpot=} [properties] Properties to set
             * @returns {sampleProto.SampleToSpot} SampleToSpot instance
             */
            SampleToSpot.create = function create(properties) {
                return new SampleToSpot(properties);
            };
    
            /**
             * Encodes the specified SampleToSpot message. Does not implicitly {@link sampleProto.SampleToSpot.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SampleToSpot
             * @static
             * @param {sampleProto.SampleToSpot} message SampleToSpot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleToSpot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from != null && message.hasOwnProperty("from"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SampleToSpot message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SampleToSpot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SampleToSpot} SampleToSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleToSpot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SampleToSpot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.from = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SampleToSpot;
        })();
    
        sampleProto.ResetSpot = (function() {
    
            /**
             * Properties of a ResetSpot.
             * @memberof sampleProto
             * @interface IResetSpot
             * @extends IMessage
             * @property {number|null} [count] ResetSpot count
             */
    
            /**
             * Constructs a new ResetSpot.
             * @memberof sampleProto
             * @classdesc Represents a ResetSpot.
             * @implements IResetSpot
             * @constructor
             * @param {sampleProto.IResetSpot=} [properties] Properties to set
             */
            function ResetSpot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ResetSpot
             * @static
             */
            ResetSpot.className = "ResetSpot";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ResetSpot
             * @static
             */
            ResetSpot.index = 12;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.ResetSpot
             * @instance
             */
            ResetSpot.prototype.className = "ResetSpot";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.ResetSpot
             * @instance
             */
            ResetSpot.prototype.index = 12;
    
            /**
             * ResetSpot count.
             * @member {number} count
             * @memberof sampleProto.ResetSpot
             * @instance
             */
            ResetSpot.prototype.count = 0;
    
            /**
             * Creates a new ResetSpot instance using the specified properties.
             * @function create
             * @memberof sampleProto.ResetSpot
             * @static
             * @param {sampleProto.IResetSpot=} [properties] Properties to set
             * @returns {sampleProto.ResetSpot} ResetSpot instance
             */
            ResetSpot.create = function create(properties) {
                return new ResetSpot(properties);
            };
    
            /**
             * Encodes the specified ResetSpot message. Does not implicitly {@link sampleProto.ResetSpot.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.ResetSpot
             * @static
             * @param {sampleProto.ResetSpot} message ResetSpot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetSpot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
                return writer;
            };
    
            /**
             * Decodes a ResetSpot message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.ResetSpot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.ResetSpot} ResetSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetSpot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.ResetSpot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.count = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return ResetSpot;
        })();
    
        sampleProto.SetTimer = (function() {
    
            /**
             * Properties of a SetTimer.
             * @memberof sampleProto
             * @interface ISetTimer
             * @extends IMessage
             * @property {number|null} [interval] SetTimer interval
             * @property {string|null} [message] SetTimer message
             */
    
            /**
             * Constructs a new SetTimer.
             * @memberof sampleProto
             * @classdesc Represents a SetTimer.
             * @implements ISetTimer
             * @constructor
             * @param {sampleProto.ISetTimer=} [properties] Properties to set
             */
            function SetTimer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SetTimer
             * @static
             */
            SetTimer.className = "SetTimer";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SetTimer
             * @static
             */
            SetTimer.index = 13;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.SetTimer
             * @instance
             */
            SetTimer.prototype.className = "SetTimer";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.SetTimer
             * @instance
             */
            SetTimer.prototype.index = 13;
    
            /**
             * SetTimer interval.
             * @member {number} interval
             * @memberof sampleProto.SetTimer
             * @instance
             */
            SetTimer.prototype.interval = 0;
    
            /**
             * SetTimer message.
             * @member {string} message
             * @memberof sampleProto.SetTimer
             * @instance
             */
            SetTimer.prototype.message = "";
    
            /**
             * Creates a new SetTimer instance using the specified properties.
             * @function create
             * @memberof sampleProto.SetTimer
             * @static
             * @param {sampleProto.ISetTimer=} [properties] Properties to set
             * @returns {sampleProto.SetTimer} SetTimer instance
             */
            SetTimer.create = function create(properties) {
                return new SetTimer(properties);
            };
    
            /**
             * Encodes the specified SetTimer message. Does not implicitly {@link sampleProto.SetTimer.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.SetTimer
             * @static
             * @param {sampleProto.SetTimer} message SetTimer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetTimer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.interval != null && message.hasOwnProperty("interval"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.interval);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };
    
            /**
             * Decodes a SetTimer message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.SetTimer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.SetTimer} SetTimer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetTimer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.SetTimer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.interval = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return SetTimer;
        })();
    
        sampleProto.RemoveTimer = (function() {
    
            /**
             * Properties of a RemoveTimer.
             * @memberof sampleProto
             * @interface IRemoveTimer
             * @extends IMessage
             */
    
            /**
             * Constructs a new RemoveTimer.
             * @memberof sampleProto
             * @classdesc Represents a RemoveTimer.
             * @implements IRemoveTimer
             * @constructor
             * @param {sampleProto.IRemoveTimer=} [properties] Properties to set
             */
            function RemoveTimer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RemoveTimer
             * @static
             */
            RemoveTimer.className = "RemoveTimer";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RemoveTimer
             * @static
             */
            RemoveTimer.index = 14;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.RemoveTimer
             * @instance
             */
            RemoveTimer.prototype.className = "RemoveTimer";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.RemoveTimer
             * @instance
             */
            RemoveTimer.prototype.index = 14;
    
            /**
             * Creates a new RemoveTimer instance using the specified properties.
             * @function create
             * @memberof sampleProto.RemoveTimer
             * @static
             * @param {sampleProto.IRemoveTimer=} [properties] Properties to set
             * @returns {sampleProto.RemoveTimer} RemoveTimer instance
             */
            RemoveTimer.create = function create(properties) {
                return new RemoveTimer(properties);
            };
    
            /**
             * Encodes the specified RemoveTimer message. Does not implicitly {@link sampleProto.RemoveTimer.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.RemoveTimer
             * @static
             * @param {sampleProto.RemoveTimer} message RemoveTimer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveTimer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Decodes a RemoveTimer message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.RemoveTimer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.RemoveTimer} RemoveTimer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveTimer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.RemoveTimer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return RemoveTimer;
        })();
    
        sampleProto.UserInfo = (function() {
    
            /**
             * Properties of a UserInfo.
             * @memberof sampleProto
             * @interface IUserInfo
             * @extends IMessage
             * @property {string|null} [nickName] UserInfo nickName
             */
    
            /**
             * Constructs a new UserInfo.
             * @memberof sampleProto
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {sampleProto.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * static className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.UserInfo
             * @static
             */
            UserInfo.className = "UserInfo";

            /**
             * static index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.UserInfo
             * @static
             */
            UserInfo.index = 15;

            /**
             * IMessage property className: string. NGT Client
             * @member {string} className
             * @memberof sampleProto.UserInfo
             * @instance
             */
            UserInfo.prototype.className = "UserInfo";

            /**
             * IMessage property index: number. NGT Client
             * @member {number} index
             * @memberof sampleProto.UserInfo
             * @instance
             */
            UserInfo.prototype.index = 15;
    
            /**
             * UserInfo nickName.
             * @member {string} nickName
             * @memberof sampleProto.UserInfo
             * @instance
             */
            UserInfo.prototype.nickName = "";
    
            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof sampleProto.UserInfo
             * @static
             * @param {sampleProto.IUserInfo=} [properties] Properties to set
             * @returns {sampleProto.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };
    
            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link sampleProto.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof sampleProto.UserInfo
             * @static
             * @param {sampleProto.UserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
                return writer;
            };
    
            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof sampleProto.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sampleProto.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sampleProto.UserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            return UserInfo;
        })();
    
        return sampleProto;
    })();

    return $root;
});
