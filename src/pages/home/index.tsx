import { CheckboxLabel } from '@/components/common/CheckboxLabel'
import { DropdownSelect } from '@/components/common/DropdownSelect'
import InstitutionCard from '@/components/common/InstitutionCard'
import SearchBar from '@/components/common/SearchBar'
import SortBy from '@/components/common/SortBy'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SlidersHorizontal } from 'lucide-react'
import Pagination from '@/components/common/Pagination'
import { useGetInstitutionsQuery } from '@/app/services/institution'
import { ArrowDownNarrowWide } from 'lucide-react'
import OrderButton from '@/components/common/OrderToggle'
import { institutionImages } from '@/data/placeholder'
import { ChangeEvent, useEffect, useState } from 'react'
import { InstitutionSkeletonCard } from '@/components/common/Skeleton'
import { debounce } from "lodash";

const Home = () => {
  const [page, setPage] = useState(1);
  const [asc, setAsc] = useState(false)
  // const [sortObj, setSortObj] = useState<'name' | 'code'>('name')
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading } = useGetInstitutionsQuery({ page: page, sort: asc ? 'ASC' : 'DESC', search: searchTerm })
  const [totalPage, setTotalPage] = useState<number>(1);


  const toggleOrder = () => {
    setAsc(prevState => !prevState)
  }
  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const debouncedSearch = debounce((debouncedSearchTerm: string) => {
    setSearchTerm(debouncedSearchTerm);
    setPage(1)
  }, 1000);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };
  const style = {
    filterGroup: "flex flex-col gap-1 font-semibold",
    filterWrapper: "flex flex-col gap-2"
  }

  useEffect(() => {
    setTotalPage(data?.totalPages || 1)
  }, [data]);
  return (
    <section className='grid grid-cols-4 gap-4 pb-8 '>
      <div className=''>
        <div className='flex flex-col gap-4 border-r-2 w-[19rem] pr-4 bg-white fixed'>
          <div className='flex gap-2 items-center font-semibold text-slate-500 hover:underline underline-offset-4 cursor-pointer'>
            <SlidersHorizontal className="text-slate-500" size={20} />
            <h1 className='text-lg'>Filter</h1>
          </div>
          <div className={style.filterWrapper}>
            <div className={style.filterGroup}>
              <h2>Select sector</h2>
              <DropdownSelect title='Sector' options={["All", "South", "North", "Center"]} />
            </div>
            <div className={style.filterGroup}>
              <h2>Select province</h2>
              <DropdownSelect title='Province/City' options={["Ho Chi Minh", "Can Tho", "Tra Vinh", "An Giang"]} />
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className={style.filterWrapper}>
            <div className={style.filterGroup}>
              <h2>Enter admission score</h2>
              <div className="flex flex-wrap gap-4 items-center ">
                <div>From:</div>
                <Input className='max-w-16 font-normal' type='number' defaultValue={0} placeholder='0' />
                <div>to:</div>
                <Input className='max-w-16 font-normal' type='number' defaultValue={30} placeholder='30' />
              </div>
            </div>
            <div className=''>
              {/* <div className="flex gap-2 items-center font-semibold">
              <h2 className='w-36'>Choose year</h2>
              <DropdownSelect options={["2024", "2023", "2022"]} />
            </div> */}
              <SortBy title='Year' options={["2024", "2023", "2022"]} />
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className={style.filterWrapper}>
            <div className={style.filterGroup}>
              <h2>Select Department</h2>
              <DropdownSelect title='Department' options={["Information Technology", "Business Management"]} />
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
          <Button variant='secondary'>Clear filter</Button>
        </div>
      </div>

      <div className='col-span-3 flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <SearchBar placeholder='Search departments...' searchTerm={searchTerm} handleChange={handleSearch} />
          <SortBy options={["Name", "Code"]} />
          <OrderButton asc={asc} toggleOrder={toggleOrder} />
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            {
              isLoading ?
                <InstitutionSkeletonCard />
                : data?.institutions.map(institution =>
                  <InstitutionCard
                    key={institution.id}
                    id={institution.id}
                    name={institution.name}
                    code={institution.code}
                    image={institutionImages[institution.code as keyof typeof institutionImages]}
                  />
                )
            }
          </div>
          <Pagination count={totalPage} page={page} handleChange={handlePageChange} />
        </div>
      </div>
    </section>
  )
}

export default Home