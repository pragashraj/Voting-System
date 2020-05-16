import React ,{Component} from 'react'
import '../../css/custom/customInput.css'

class CustomInput extends Component{
    
    handleChange=(e)=>{
        this.props.handleInput(e)
    }

    render(){
        return (
            <div className="custom-input">
                <div className="custom-input-container">
                    <div className="label-container">
                        <label className="custom-label">{this.props.label}</label>
                    </div>
    
                    <div className="input-container">
                        <input 
                            type="text"
                            name="nic"
                            className="custom-input-field"
                            placeholder="Ex : 974050090v"
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
   
}

export default CustomInput
