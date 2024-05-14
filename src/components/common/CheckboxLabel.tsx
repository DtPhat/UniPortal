import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { CheckedState } from "@radix-ui/react-checkbox"
interface CheckBoxLabelType {
  label: string
}
export function CheckboxLabel({ label }: CheckBoxLabelType) {
  const onCheckChange = (checked : CheckedState) => {
    if(!checked){
      return;
    }
    toast({
      variant: "destructive",
      title: "Feature is under development.",
      description: "Please try later!",
    })
  }
  const id = `checkbox-${label}-id`
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        defaultChecked={false}
        id={id}
        onCheckedChange={(checked) => onCheckChange(checked)}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}