var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect } from "react";
const SignInWithApple = ({ clientId, scope, redirectURI, state, nonce, usePopup, onSuccess, onError, locale = "en_US", buttonStyle = {
    mode: "center-align",
    type: "sign-in",
    color: "black",
    border: true,
    borderRadius: 15,
    width: "100%",
    height: 40,
}, }) => {
    var _a;
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/${locale}/appleid.auth.js`;
        script.async = true;
        script.onload = () => {
            window.AppleID.auth.init({
                clientId: clientId,
                scope: scope,
                redirectURI: redirectURI,
                state: state,
                nonce: nonce,
                usePopup: usePopup,
            });
            window.AppleID.auth.renderButton();
            document.addEventListener("AppleIDSignInOnSuccess", (event) => {
                // @ts-ignore
                onSuccess(event.detail.data);
            });
            document.addEventListener("AppleIDSignInOnFailure", (event) => {
                // @ts-ignore
                onError(event.detail.error);
            });
        };
        document.body.appendChild(script);
    }, []);
    return (React.createElement("div", { id: "appleid-signin", style: {
            cursor: "pointer",
        }, className: "signin-button", "data-mode": buttonStyle.mode, "data-type": buttonStyle.type, "data-color": buttonStyle.color, "data-border": buttonStyle.border, "data-border-radius": buttonStyle.borderRadius, "data-width": buttonStyle.width, "data-height": (_a = buttonStyle.height) !== null && _a !== void 0 ? _a : 40, "data-logo-size": buttonStyle.logoSize, "data-logo-position": buttonStyle.logoPosition, "data-label-position": buttonStyle.labelPosition, onClick: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = yield window.AppleID.auth.signIn();
                onSuccess(data);
            }
            catch (error) {
                onError(error);
            }
        }) }));
};
export default SignInWithApple;
