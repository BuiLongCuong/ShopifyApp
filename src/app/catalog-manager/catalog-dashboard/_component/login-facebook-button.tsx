'use client';

import { Button } from '@/components/ui/button';
import FacebookLogin from '@greatsumini/react-facebook-login';

function LoginFacebookButton() {
    return (
            <FacebookLogin
                appId="572624309075173"
                onSuccess={(response) => {
                    console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                }}
                render={() => (
                    <Button
                        className="font-[700] text-[15px] leading-[17px] font-sans bg-[#385b96] hover:bg-[#385b96] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm px-5 py-2.5 me-2 mb-2 small"
                    >
                        Login with Facebook</Button>
                )}
            />
     );
}

export default LoginFacebookButton;