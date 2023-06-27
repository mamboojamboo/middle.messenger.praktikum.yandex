import { InfoField } from 'shared';
import template from './container/UserInfo.hbs';
import styles from './styles/styles.module.css';

type TUserInfoProps = {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  nickName: string;
  phone: string;
  avatar: string;
  isEdit?: boolean;
}

export const UserInfo = ({
  email,
  login,
  firstName,
  lastName,
  nickName,
  phone,
  avatar,
  isEdit = false,
}: TUserInfoProps) => template({
  styles,
  email: InfoField({
    title: 'email', name: 'email', value: email, isEdit,
  }),
  login: InfoField({
    title: 'login', name: 'login', value: login, isEdit,
  }),
  firstName: InfoField({
    title: 'firstName',
    name: 'first_name',
    value: firstName,
    isEdit,
  }),
  lastName: InfoField({
    title: 'lastName',
    name: 'second_name',
    value: lastName,
    isEdit,
  }),
  nickName: InfoField({
    title: 'nickName',
    name: 'display_name',
    value: nickName,
    isEdit,
  }),
  phone: InfoField({
    title: 'phone', name: 'phone', value: phone, isEdit,
  }),
  avatar: InfoField({
    title: 'avatar',
    name: 'avatar',
    value: avatar,
    isEdit,
  }),
  isEdit,
});
