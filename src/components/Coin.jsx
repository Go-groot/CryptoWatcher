import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import {server} from '../index.js'
import { Button, Container, HStack, Radio, RadioGroup, } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorHandle from './EroorHandle.jsx';
import CoinCard from './CoinCard.jsx';

const Coin = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');
  
  const btns = new Array(132).fill(1);

  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const changePage = (page) => {
    setPage(page);
    setLoading(true)
  }

  useEffect(() => {
      const fetchCoins = async () => {
      
        try {
          const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
          
        setCoins(data);
        setLoading(false);

        } catch (error) {
          
          setError(true);
          setLoading(false)
        }
      } 
      fetchCoins();
    }, [currency,page]);

    if(error) return <ErrorHandle message={'Error while fetching the Coins'}/>

  return (
    <Container maxW={'container.xl'}>
      {
        loading ? 
        <Loader /> 
          : 
        <>
          <RadioGroup justifyContent={'space-evenly'} value={currency} onChange={setCurrency}>
            <HStack spacing={'4'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
             {
              
              coins.map((i) => (              
                <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol} />
              ))
             }
          </HStack>
          <HStack overflowX={'auto'} p={'8'} w={'full'}>
            {
              btns.map((item, index) => (
                <Button bgColor={'blackAlpha.500'} color={'white'} onClick={() => changePage(index + 1)}>{index + 1}</Button>
              ))
            }
          </HStack>
        </>
      }
    </Container>
  )
}

export default Coin
