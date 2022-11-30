
export interface CheckboxProps{
    checked? :boolean;
    onClick?():void;
}

export default function CheckBox({checked,onClick}:CheckboxProps){
    return(
        <div>
            <input checked={checked} onClick={onClick} type="checkbox" />
        </div>
    );
}