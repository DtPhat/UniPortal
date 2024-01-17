import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';


type SearchBarProps = {
  placeholder?: string
}
const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="flex w-full items-center gap-2 relative">
      <Search className="absolute left-2 text-slate-500" size={20}/>
      <Input type="email" placeholder={placeholder} className="w-full pl-8 pr-4" />
    </div>
  )
}

export default SearchBar
