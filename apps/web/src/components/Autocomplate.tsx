'use client';

import { Event } from '@/types/events';
import { useRouter } from 'next/navigation';
import AsyncSelect from 'react-select/async';
import { debounce } from 'lodash';
import useAxios from '@/hooks/useAxios';

interface EventOption {
  label: string;
  value: string;
}

const Autocomplete = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  const getEventsOptions = async (inputText: string) => {
    const { data } = await axiosInstance.get('/events', {
      params: { search: inputText, take: 20 },
    });
    return data?.data.map((event: Event) => ({
      label: event.name,
      value: event.id,
    }));
  };

  const loadOptions = debounce(
    (inputText: string, callback: (option: EventOption[]) => void) => {
      getEventsOptions(inputText).then((option) => callback(option));
    },
    500,
  );

  return (
    <AsyncSelect
      placeholder="Cari Event..."
      loadOptions={loadOptions}
      onChange={(event, actionMeta) => {
        if (actionMeta.action !== 'clear') {
          router.push(`/explore/${event?.value}`);
        }
      }}
      isClearable={true}
    />
  );
};

export default Autocomplete;

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
