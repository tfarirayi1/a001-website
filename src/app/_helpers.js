import {Auth} from 'aws-amplify';

export default class Helpers{
    static configureAuth(){
        Auth.configure({
            identityPoolId:'eu-west-1:25388842-fe3f-47da-b371-8523843a6018',
            userPoolId:'eu-west-1_CTOnEIecG',
            userPoolWebClientId:'1f39eiq38scgarj4l6hdnmlqct',
            mandatorySignIn:true,
        });
    }
}