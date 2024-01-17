import React from 'react'
import { Button } from "@/components/ui/button"
import UniversityCard from '@/components/UniversityCard'
import { QuickSelect } from '@/components/QuickSelect'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@radix-ui/react-checkbox'
import { CheckboxLabel } from '@/components/CheckboxLabel'
import SearchBar from '@/components/SearchBar'
import SortBy from '@/components/SortBy'
import { Input } from '@/components/ui/input'
import { InputIcon } from '@radix-ui/react-icons'
const Home = () => {
  const style = {
    filterGroup: "flex flex-col gap-1 font-semibold",
    filterWrapper: "flex flex-col gap-2"
  }
  return (
    <section className='grid grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4 border-r-2 pr-4'>
        <div className={style.filterWrapper}>
          <div className={style.filterGroup}>
            <h2>Select sector</h2>
            <QuickSelect title='Sector' options={["All", "South", "North", "Center"]} />
          </div>
          <div className={style.filterGroup}>
            <h2>Select province</h2>
            <QuickSelect title='Province/City' options={["Ho Chi Minh", "Can Tho", "Tra Vinh", "An Giang"]} />
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className={style.filterWrapper}>
          <div className={style.filterGroup}>
            <h2>Select falcuty</h2>
            <QuickSelect title='Falcuty' options={["Information Technology", "Business Management"]} />
          </div>
          <div className={style.filterGroup}>
            <h2>Choose majors</h2>
            <div className='flex flex-col gap-2'>
              <CheckboxLabel label='Software Engineering' />
              <CheckboxLabel label='Information Assurance' />
              <CheckboxLabel label='Artificial Intelligence ' />
            </div>
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className={style.filterWrapper}>
          <div className={style.filterGroup}>
            <h2>Enter admission score</h2>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div>From:</div>
              <Input className='max-w-16' type='number' defaultValue={0} placeholder='0' />
              <div>to:</div>
              <Input className='max-w-16' type='number' defaultValue={30} placeholder='30' />
            </div>
          </div>
          <div className=''>
            {/* <div className="flex gap-2 items-center font-semibold">
              <h2 className='w-36'>Choose year</h2>
              <QuickSelect options={["2024", "2023", "2022"]} />
            </div> */}
            <SortBy title='Year' options={["2024", "2023", "2022"]} />
          </div>
        </div>
      </div>
      <div className='col-span-3 flex flex-col gap-4'>
        <div className='flex gap-2'>
          <SearchBar placeholder='Search school...' />
          <SortBy options={["Name", "Top"]} />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
        </div>
      </div>
    </section>
  )
}

export default Home