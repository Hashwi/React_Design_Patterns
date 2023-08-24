import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
// import { UncontrolledModal } from "./UncontrolledModal";
// import { UncontrolledFrom } from "./UncontrolledFrom";

function App() {
	const [shouldShowModal, setshouldShowModal] = useState(false)
	return (
		<>
		{/* <UncontrolledModal/> */}
		{/* <UncontrolledFrom/> */}
		<ControlledForm/>

		<ControlledModal shouldShow={shouldShowModal}
		onRequestClose={()=> setshouldShowModal(false) }>
			<h1>Hello!</h1>
		</ControlledModal>
		<button onClick={()=> setshouldShowModal(!shouldShowModal)}>
		{shouldShowModal ? 'Hide Modal' : 'Show Modal'}
			</button>

		</>
	);
}

export default App;
