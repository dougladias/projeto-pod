import AuthenticatedSessionController from './AuthenticatedSessionController'
import RegisteredUserController from './RegisteredUserController'
import PasswordResetLinkController from './PasswordResetLinkController'
import NewPasswordController from './NewPasswordController'
const Auth = {
    AuthenticatedSessionController: Object.assign(AuthenticatedSessionController, AuthenticatedSessionController),
RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
PasswordResetLinkController: Object.assign(PasswordResetLinkController, PasswordResetLinkController),
NewPasswordController: Object.assign(NewPasswordController, NewPasswordController),
}

export default Auth