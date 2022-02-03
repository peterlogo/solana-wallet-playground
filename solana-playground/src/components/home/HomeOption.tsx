import { Link } from 'react-router-dom';
import { Center, Icon, Text, VStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface HomeOptionProps {
  icon: IconType;
  path: string;
}

export function HomeOption(props: HomeOptionProps) {
  return (
    <>
      <Link to={props.path}>
        <VStack>
          <Center
            m={5}
            width={'167px'}
            height={'163px'}
            bg={'primary'}
            size={'lg'}
            _hover={{
              background: 'blue.500'
            }}
            rounded={'md'}
            shadow={'base'}
          >
            <Icon as={props.icon} color={'white'} w={53} h={38} />
          </Center>
          <Text color={'white'}>
            {props.path.substring(1, props.path.length).toUpperCase()}
          </Text>
        </VStack>
      </Link>
    </>
  );
}
