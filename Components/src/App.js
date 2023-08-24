 import { useState } from "react";
// import { ControlledForm } from "./ControlledForm";
// import { ControlledModal } from "./ControlledModal";
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
// import { UncontrolledModal } from "./UncontrolledModal";
// import { UncontrolledFrom } from "./UncontrolledFrom";
// import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnBoardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1> Step 1</h1>
    <button onClick={() => goToNext({name: 'Hash'})}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
	<>
	  <h1> Step 2</h1>
	  <button onClick={() => goToNext({age: 65 })}>Next</button>
	</>
  );
  const StepThree = ({ goToNext }) => (
	<>
	  <h1> Step 3</h1>
	  <p>Congratulations ! You are qualified fro our Senior Discount</p>
	  <button onClick={() => goToNext({hairColor: 'Brown'})}>Next</button>
	</>
  );
const StepFour = ({ goToNext }) => (
	<>
	  <h1> Step 4</h1>
	  <button onClick={() => goToNext({hairColor: 'Brown'})}>Next</button>
	</>
  );
function App() {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
		setOnboardingData({...onboardingData, ...stepData})
		setCurrentIndex(currentIndex + 1)
	}
  // const [shouldShowModal, setshouldShowModal] = useState(false)
  return (
    <>
      {/* <UncontrolledModal/> */}
      {/* <UncontrolledFrom/> */}
      {/* <ControlledForm/>

		<ControlledModal shouldShow={shouldShowModal}
		onRequestClose={()=> setshouldShowModal(false) }>
			<h1>Hello!</h1>
		</ControlledModal>
		<button onClick={()=> setshouldShowModal(!shouldShowModal)}>
		{shouldShowModal ? 'Hide Modal' : 'Show Modal'}
			</button> */}
      {/* <UncontrolledOnboardingFlow onFinish={data => {
		console.log(data)
		alert('Onboarding complete!');
	  }}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}

<ControlledOnboardingFlow 
currentIndex={currentIndex}
onNext={onNext}
>
        <StepOne />
        <StepTwo />
       {onboardingData.age >= 62 && <StepThree /> }
		<StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
