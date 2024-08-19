'use client';

// import useAxios from '@/hooks/useAxios';
import { Event } from '@/types/events';
import { useRouter } from 'next/navigation';
import AsyncSelect from 'react-select/async';
import { debounce } from 'lodash';

interface EventOption {
  label: string;
  value: string;
}

const Autocomplete = () => {
  const router = useRouter();
  // const { axiosInstance } = useAxios();

  const getEventsOptions = async (inputText: string) => {
    // const { data } = await axiosInstance.get('/explore', {
    //   params: { search: inputText, take: 20 },
    // });
    // return data?.data.map((event: Event) => ({
    //   label: event.title,
    //   value: event.id,
    // }));
  };

  //   const loadOptions = debounce(
  //     // (inputText: string, callback: (option: EventOption[]) => void) => {
  //     //   getEventsOptions(inputText).then((option) => callback(option));
  //     // },
  //     // 500,
  //   );

  return (
    // <InputGroup w="300px" display={{ base: 'none', md: 'block' }}>
    //         <InputLeftElement pointerEvents="none" pl="8px">
    //           <IoIosSearch color="white" size="23px" />
    //         </InputLeftElement>
    //         {/* <Input
    //           placeholder="Search Events"
    //           borderColor="white"
    //           borderRadius="25px"
    //           textColor="white"
    //           pl="45px"
    //         /> */}
    //       </InputGroup>
    <AsyncSelect
      placeholder="Cari Event..."
      //   className="mx-auto my-8 max-w-[650px]"
      //   loadOptions={loadOptions}
      //   onChange={(event) => router.push(`/events/${event?.value}`)}
    />
  );
};

export default Autocomplete;
