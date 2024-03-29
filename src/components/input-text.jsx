
export default function InputText({ Label, register = () => { }, name, ...props }) {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="">{Label}</label>
            <input {...register(name)} type="text" {...props} className="px-2 py-1 h-10 bg-stone-400" />
        </div>
    )
}