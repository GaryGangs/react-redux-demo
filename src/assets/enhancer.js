import React, { useState } from "react";


let enhancer =
  (DemoForm) =>
    ({ ...props }) => {
      const [results, setResults] = useState([]);
      const [selectedRows, setSelectedRows] = useState({

        name: "",
        email: "",
        mobile: "",
        password: "",
        number: "",
        drop: "",
        date: "",
        time: "",
        radio: "",
        check: false,
        switch: "",
        area: "",
        file: "",
        pincode: "",
        alphanum: "",
        alpha: "",
        telephone: "",

      });
      const [selectedIndex, setSelectedIndex] = useState(-2);
      const [viewOnly, setViewOnly] = useState(false);
      const [saveView, setSaveView] = useState(true);
      const [errorName, setErrorName] = useState("");
      const [errorAlpha, setErrorAlpha] = useState("");
      const [errorEmail, setErrorEmail] = useState("");
      const [errorMobile, setErrorMobile] = useState("");
      const [errorPassword, setErrorPassword] = useState("");
      const [errorNumber, setErrorNumber] = useState("");
      const [errorAlphaNum, setErrorAlphaNum] = useState("");
      const [errorDrop, setErrorDrop] = useState("");
      const [errorDate, setErrorDate] = useState("");
      const [errorTime, setErrorTime] = useState("");
      const [errorRadio, setErrorRadio] = useState("");
      const [errorCheck, setErrorCheck] = useState("");
      const [errorSwitch, setErrorSwitch] = useState("");
      const [errorArea, setErrorArea] = useState("");
      const [errorFile, setErrorFile] = useState("");
      const [errorPin, setErrorPin] = useState("");
      const [errorTelephone, setErrorTelephone] = useState("");

      const onFieldChange = (e) => {
        selectedRows[e.target.name] = e.target.value;
        setSelectedRows(selectedRows);
        handleValidation(e);
      };

      const onClear = () => {
        document.getElementById("DemoForm").reset();
        setViewOnly(false);
        setSelectedIndex(-1);
        setSelectedRows([]);
      };

      const submitEditedField = (event) => {

        results[selectedIndex] = selectedRows;
        setSelectedRows(results);
        onClear();
        // toast.success('Data Added', {
        //   hideProgressBar: false,
        //   draggable: true,
        //   progress: undefined,
        // });
      };
      const handleValidation = (event) => {

        switch (event.target.name) {
          case "name":
            if (!event.target.value) {
              setErrorName("Name is required");
              setSaveView(true);
            }
            else {
              setErrorName("");
            }
            break; 
            case "alpha":

              if(event.target.value.length === 0) {
                setErrorAlpha("")
              }
            else if (!event.target.value) {
              setErrorName("Name required");
              setSaveView(true);
            }
            else if (!/^[A-Za-z]+$/.test(event.target.value)){
              setErrorAlpha("Alphabets Only");
              setSaveView(true);
            }
            else {
              setErrorAlpha("")
            }
            break;
            case "email":

              if(event.target.value.length === 0) {
                setErrorEmail("");
              }
            else if (!event.target.value) {
              setErrorEmail("Email required");
              setSaveView(true);
            }
            else if (!/^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/.test(event.target.value)) {
              setErrorEmail("invalid email");
              setSaveView(true);
            }
            else {
              setErrorEmail("");
            }
            break; 
            
            
            case "mobile":

            if(event.target.value.length === 0) {
              setErrorMobile("");
              }
            else if (!/^([0-9]{6})[-. ]?([0-9]{4})$/.test(event.target.value)) {
              setErrorMobile("invalid mobile");
              setSaveView(true);
            }
            else {
              setErrorMobile("");
            }
            break; 
            
            case "password":

            if(event.target.value.length === 0) {
              setErrorPassword("");
                }
            else if (!event.target.value) {
              setErrorPassword("Password is required");
              setSaveView(true);
            }
            else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(event.target.value)) {
              setErrorPassword("invalid password");
              setSaveView(true);
            }
            else {
              setErrorPassword("");
            }
            break; 
            case "number":

            if(event.target.value.length === 0) {
                setErrorNumber("");
                  }
            else if (!event.target.value) {
              setErrorNumber("Number is required");
              setSaveView(true);
            }
            else if (!/^[0-9]*$/.test(event.target.value)) {
              setErrorNumber("Only Number Required");
              setSaveView(true);
            }
           
            else {
              setErrorNumber("");
            }
            break; 
            case "pincode":
              if(event.target.value.length === 0) {
                setErrorPin("");
              }
            else if (!/^([0-9]{3})[-. ]?([0-9]{3})$/.test(event.target.value)) {
              setErrorPin("invalid pincode");
              setSaveView(true);
            }

          
            else {
              setErrorPin("");
            }
            break;
            case "telephone":
              if(event.target.value.length === 0) {
                setErrorTelephone("");
              }
            else if (!/^[\+]?[(]?[0-9]{5}[)]?[-\s\.]?[0-9]{4,6}$/im.test(event.target.value)) {
              setErrorTelephone("Telephone is invalid");
              setSaveView(true);
            }
            else {
              setErrorTelephone("");
            }
            break;
            case "alphanum":

              if(event.target.value.length === 0) {
                setErrorAlphaNum("");
              }

            else if (!/^[ A-Za-z0-9_@./#&+-]*$/.test(event.target.value)) {
              setErrorAlphaNum("Alpha Numerics Only");
              setSaveView(true);
            }
            else {
              setErrorAlphaNum("");
            }
            break;
            case "drop":
              if (!event.target.value) {
                setErrorDrop("Drop down is required");
                setSaveView(true);
              }
              else {
                setErrorDrop("");
              }
              break;
          default: break;
        }

        validate();
      };

      const validate = () => {
        if (
          selectedRows.alpha && selectedRows.alphanum && selectedRows.drop && selectedRows.name && selectedRows.email && selectedRows.number && selectedRows.number.length >= 5 && selectedRows.number.length < 10 && true
        ) {
          setSaveView(false);
        }
        results[selectedIndex] = selectedRows;
        setSelectedRows(results);
      };

      return (
        <DemoForm
          {...{
            selectedRows,
            results,
            setResults,
            selectedIndex,
            onFieldChange,
            validate,
            submitEditedField,
            viewOnly,
            saveView,
            onClear,
            errorName,
            errorEmail,
            errorMobile,
            errorPassword,
            errorNumber,
            errorDrop,
            errorDate,
            errorTime,
            errorRadio,
            errorCheck,
            errorSwitch,
            errorArea,
            errorFile,
            errorPin,
            errorAlphaNum,
            errorAlpha,
            errorTelephone
          }}
        />
      );
    };
export default enhancer;
