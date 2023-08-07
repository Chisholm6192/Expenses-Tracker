import React from 'react';
// Next Library
import Image from 'next/image';
// Mantine Library
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
// Styles | Images
import styles from '../styles/landingpage.module.css';
import creditCard from '../images/creditcard.png';
import circle from '../images/circle.png';
import circle2 from '../images/circle2.png';
import circle3 from '../images/circle3.png';

import Link from 'next/link';
import LandingPage from './LandingPage';
import Dashboard from './dashboard';

export default function Home(){
  return(
    <LandingPage/>
  )
}