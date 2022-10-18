import React from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import StepContext from "./context/StepProvider";

import "./App.css";

function App() {

    const [step, setStep] = React.useState(1);

    return (
        <div >
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <StepContext.Provider value={{ step, setStep }}>
                        <Header />
                        <Form />
                        <Footer />
                    </StepContext.Provider>
</div>
    );
}



export default App;