import {log} from "util";

export const User = () => {

    let deleteUser = () => alert('Delete')
    let textChange = () => console.log('textChange')
    let oneFocus = () => console.log('oneFocus')
    let nonFocus = () => console.log('nonFocus')




    return <div>Andrew
        <button onClick={deleteUser}>Delete</button>
        <button>Save</button>
        <div>
            <textarea onBlur={nonFocus} onFocus={oneFocus} onChange={textChange} placeholder={'Hello'}>X</textarea>
        </div>
    </div>
}