import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { id } from 'date-fns/locale';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import cn from '@/common/libs/cn';
import { CareerProps } from '@/common/types/careers';

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  responsibilities,
}: CareerProps) => {
  const [isShowResponsibility, setIsShowResponsibility] =
    useState<boolean>(false);

  const startDateFormatted = format(new Date(start_date), 'MMM yyyy', {
    locale: id,
  });
  const endDateFormatted = end_date
    ? format(new Date(end_date), 'MMM yyyy')
    : 'Sekarang';

  const durationYears = differenceInYears(
    new Date(end_date || Date.now()),
    new Date(start_date),
  );
  const durationMonths =
    (differenceInMonths(
      new Date(end_date || Date.now()),
      new Date(start_date),
    ) %
      12) +
    1;

  const durationText = `${durationYears > 0 ? `${durationYears} Tahun${durationYears > 1 ? '' : ''}, ` : ''}${durationMonths} Bulan${durationMonths > 1 ? '' : ''}`;

  return (
    <Card className='flex gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      <div className='mt-1.5 w-fit'>
        {logo ? (
          <Image
            src={logo}
            width={55}
            height={55}
            alt={company}
            className='h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent'
          />
        ) : (
          <CompanyIcon size={50} />
        )}
      </div>
      <div className='w-4/5 space-y-3'>
        <div className='space-y-1'>
          <h6 className='font-bold'>{position}</h6>
          <div className='space-y-1 text-sm text-neutral-600 dark:text-neutral-400'>
            <div className='flex flex-col gap-1 font-bold text-neutral-50 md:flex-row md:items-center md:gap-2'>
              {company}
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span className='text-neutral-600 dark:text-neutral-400'>
                {location}
              </span>
            </div>
            <div className='flex flex-col gap-2 md:flex-row md:text-[13px]'>
              <div className='flex gap-1'>
                <span>
                  {startDateFormatted} - {endDateFormatted}
                </span>
              </div>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span className='text-neutral-500 dark:text-neutral-500'>
                {durationText}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsShowResponsibility(!isShowResponsibility)}
          className='-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500'
        >
          <HiChevronRight
            size={18}
            className={cn({
              'rotate-90 transition-all duration-300': isShowResponsibility,
            })}
          />
          {isShowResponsibility ? 'Tutup' : 'Tampilkan'} Tanggung Jawab
        </button>
        <AnimatePresence>
          {isShowResponsibility && (
            <motion.ul
              className='ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {responsibilities?.map((item) => (
                <motion.li key={item} layout>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default CareerCard;
