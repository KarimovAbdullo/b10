import {ImageSourcePropType} from 'react-native/types';

export interface ItalianItem {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
}

export const Italian: ItalianItem[] = [
  {
    id: 1,
    name: 'Острая пепперони',
    price: '15',
    image: require('assets/images/italia/italian1.png'),
  },
  {
    id: 2,
    name: 'Неаполь',
    price: '14',
    image: require('assets/images/italia/italian2.png'),
  },
  {
    id: 3,
    name: 'Mixi',
    price: '14',
    image: require('assets/images/italia/italian3.png'),
  },
  {
    id: 4,
    name: 'Вегетарианская ',
    price: '15',
    image: require('assets/images/italia/italian4.png'),
  },
  {
    id: 5,
    name: 'Маргарита',
    price: '12.5',
    image: require('assets/images/italia/italia5.png'),
  },
  {
    id: 6,
    name: 'My Pizza',
    price: '18',
    image: require('assets/images/italia/italia6.png'),
  },
];

export const Mexican = [
  {
    id: 1,
    name: 'Пепперони',
    price: '8.7',
    image: require('assets/images/mexican/mexican1.png'),
  },
  {
    id: 2,
    name: 'Мексикана',
    price: '13',
    image: require('assets/images/mexican/mexican2.png'),
  },
  {
    id: 3,
    name: 'Бекон',
    price: '14',
    image: require('assets/images/mexican/mexican3.png'),
  },
  {
    id: 4,
    name: 'Вегетарианская ',
    price: '15',
    image: require('assets/images/mexican/mexican4.png'),
  },
  {
    id: 5,
    name: 'Rita',
    price: '12.5',
    image: require('assets/images/mexican/mexican5.png'),
  },
  {
    id: 6,
    name: 'Loe Pizza',
    price: '15.6',
    image: require('assets/images/mexican/mexican6.png'),
  },

  {
    id: 7,
    name: 'Chicharoto',
    price: '22',
    image: require('assets/images/mexican/mexican7.png'),
  },

  {
    id: 8,
    name: 'Ice Fesd',
    price: '13.3',
    image: require('assets/images/mexican/mexican8.png'),
  },

  {
    id: 9,
    name: 'My Pizza',
    price: '18',
    image: require('assets/images/mexican/mexican9.png'),
  },
];

export const American = [
  {
    id: 1,
    name: 'Курица барбекю',
    price: '24',
    image: require('assets/images/usa/usa1.png'),
  },
  {
    id: 2,
    name: 'Сырный вулкан',
    price: '25',
    image: require('assets/images/usa/usa2.png'),
  },
  {
    id: 3,
    name: 'Садовая фиеста',
    price: '14',
    image: require('assets/images/usa/usa3.png'),
  },
  {
    id: 4,
    name: 'Средиземноморье ',
    price: '17',
    image: require('assets/images/usa/usa4.png'),
  },
  {
    id: 5,
    name: 'New-York',
    price: '18.3',
    image: require('assets/images/usa/usa5.png'),
  },
  {
    id: 6,
    name: 'Glivko Pizza',
    price: '15.6',
    image: require('assets/images/usa/usa6.png'),
  },

  {
    id: 7,
    name: 'Joe-Marta',
    price: '22',
    image: require('assets/images/usa/usa7.png'),
  },

  {
    id: 8,
    name: 'Los-Pizza',
    price: '13.3',
    image: require('assets/images/usa/usa8.png'),
  },
];
export interface IFoodDataProps {
  id: number;
  name: string;
  price?: string;
  image: ImageSourcePropType;
}
