
import {UserInfo} from './UserInfo'
import { withUser } from "./withUser";

const UserInfoWrapper = withUser(UserInfo, '234')

function App() {
	return (
		<UserInfoWrapper />
	);
}

export default App;
