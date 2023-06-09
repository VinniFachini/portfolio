import InputField from "./InputField"

const InfoLine = ({lineType, text='', indented=false, command='', commandFunction=''}) => {


    if(lineType == "welcome"){
        return (<div className="cli-wrapper welcome">
            {text}
        </div>)
    }
    else if(lineType === "help") {
        if(indented === true && command != '' && command != '') {
            return (<div className="cli-wrapper help indented">
                <div className="complex-line">
                    <div className="command">{command}</div>
                    <div className="commandFunction">{commandFunction}</div>
                </div>
            </div>)    
        } else if (indented === true && text) {
            return (<div  className="cli-wrapper help indented text">
                {text}
            </div>)
        } else {
            return (<div className="cli-wrapper help ">
                {text}
            </div>)
        }
    } else if(lineType == "command") {
        return (<div className="cli-wrapper command">
            <InputField label="guest@myportfolio: ~" disabled={true} type="text" value={text}/>
        </div>)
    } else {
        return (<></>)
    }
}

export default InfoLine;