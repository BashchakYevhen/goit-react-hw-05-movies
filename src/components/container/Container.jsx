import { Outlet } from 'react-router-dom';
import { Flex } from './container.styled';

export const Container = () => {
  return (
    <container>
      <Flex>
        <Outlet />
      </Flex>
    </container>
  );
};
