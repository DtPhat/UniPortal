import { useAppSelector } from '@/app/hooks'
import { useGetInstitutionsQuery } from '@/app/services/institution'
import { InstitutionCardReduced } from '@/components/common/InstitutionCard'
import { InstitutionSkeletonCard } from '@/components/common/Skeleton'
import { Pagination } from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import { selectUserInfo } from '@/features/auth/authSlice'
import { selectWishlist } from '@/features/wishlist/wishlistSlice'
import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const userInfo = useAppSelector(selectUserInfo)
  const wishlist = useAppSelector(selectWishlist)
  let { data, isFetching } = useGetInstitutionsQuery({ search: "", all: true })

  return (
    <div className='pb-8'>
      <div>
        <h1 className='text-2xl font-semibold'>{userInfo?.firstName}'s wishlist</h1>
        <Separator className='my-2' />
      </div>
      <div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            {
              !wishlist.length ?
                <div>
                  <div>Danh sách trống.</div>
                  <Link to="/" className="font-bold text-accent">Quay về trang chủ.</Link>
                </div>
                : isFetching ?
                  <InstitutionSkeletonCard />
                  : data?.institutions.filter(item => wishlist.includes(item.id)).map(institution =>
                    <InstitutionCardReduced
                      key={institution.id}
                      id={institution.id}
                      name={institution.name}
                      code={institution.code}
                      image={institution.avatarLink}
                    />
                  )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist