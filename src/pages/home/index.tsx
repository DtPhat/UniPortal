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
import { useGetInstitutionsQuery, useGetInstitutionsByProvinceQuery } from '@/app/services/institution'
import { ArrowDownNarrowWide } from 'lucide-react'
import OrderButton from '@/components/common/OrderToggle'
import { institutionImages } from '@/data/placeholder'
import { ChangeEvent, useEffect, useState } from 'react'
import { DataTableSkeleton, InstitutionSkeletonCard, SkeletonCard } from '@/components/common/Skeleton'
import { debounce } from "lodash";
import { useGetMajorsQuery } from '@/app/services/majors'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectWishlist } from '@/features/wishlist/wishlistSlice'

const Home = () => {
  const [page, setPage] = useState(1);
  const [asc, setAsc] = useState(false)
  const [key, setKey] = useState(+new Date())

  const wishlist = useAppSelector(selectWishlist)
  console.log("Wishlist", wishlist)
  // const [sortObj, setSortObj] = useState<'name' | 'code'>('name')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvince, setSelectedProvince] = useState("");
  let { data, isFetching } = useGetInstitutionsQuery({ page: page, sort: asc ? 'ASC' : 'DESC', search: searchTerm, provinceId: selectedProvince })
  const institutionsProvince = useGetInstitutionsByProvinceQuery({ page: page, sort: asc ? 'ASC' : 'DESC', search: searchTerm, provinceId: selectedProvince })

  const isFiltering = selectedProvince
  if (isFiltering) {
    data = institutionsProvince?.data
    isFetching = institutionsProvince?.isFetching
  }

  const [totalPage, setTotalPage] = useState<number>(1);
  const majors = useGetMajorsQuery({ all: true })?.data?.majors
  console.log(selectedProvince);


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

  return (
    <section className='grid grid-cols-4 gap-4 pb-8 '>
      {/* Filter section */}
      <div className='hidden xl:block'>
        <div className='flex flex-col gap-4 border-r-2 w-[19rem] pr-4 bg-white fixed'>
          <div className='flex gap-2 items-center font-semibold text-slate-500 hover:underline underline-offset-4 cursor-pointer'>
            <SlidersHorizontal className="text-slate-500" size={20} />
            <h1 className='text-lg'>Lọc</h1>
          </div>
          <div className={style.filterWrapper}>
            <div className={style.filterGroup}>
              <h2 className='mb-1 text-lg'>Chọn tỉnh thành</h2>
              <Select name='province' onValueChange={value => setSelectedProvince(value)} value={selectedProvince} >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tỉnh thành" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tỉnh thành</SelectLabel>
                    <SelectItem value="24">Hồ Chí Minh</SelectItem>
                    <SelectItem value="58">Hà Nội</SelectItem>
                    <Button variant={'secondary'}
                      className='w-full mt-2 h-7'
                      onClick={(e) => { setSelectedProvince('') }}
                    >
                      Bỏ chọn
                    </Button>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className={style.filterWrapper}>
            <div className={style.filterGroup}>
              <h2 className='mb-1 text-lg'>Chọn chuyên ngành</h2>
              <div className='flex flex-col gap-2 h-96 overflow-auto'>

                {!majors?.length
                  ? <DataTableSkeleton />
                  : majors?.map(item =>
                    <CheckboxLabel label={item.name} />
                  )}
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <Button
            onClick={() => setSelectedProvince('')}
            variant='secondary'
          >
            Bỏ lọc
          </Button>
        </div>
      </div>

      <div className='col-span-4 xl:col-span-3 flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <SearchBar placeholder='Tìm kiếm trường...' searchTerm={searchTerm} handleChange={handleSearch} />
          <SortBy options={["Tên", "Mã"]} />
          <OrderButton asc={asc} toggleOrder={toggleOrder} />
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            {
              isFetching ?
                <InstitutionSkeletonCard />
                : data?.institutions.map(institution =>
                  <InstitutionCard
                    key={institution.id}
                    id={institution.id}
                    name={institution.name}
                    code={institution.code}
                    image={institution.avatarLink}
                  />
                )
            }
          </div>
          <Pagination count={data?.totalPages || 1} page={page} handleChange={handlePageChange} />
        </div>
      </div>
    </section>
  )
}

export default Home