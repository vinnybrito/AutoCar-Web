
export default function InputText({Label, ...props}) {
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor="">{Label}</label>
            <input type="text" {...props} className="bg-slate-700 px-2 py-1 bg-gray-600"/>
        </div>
    )
}