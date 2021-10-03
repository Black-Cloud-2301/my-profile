import Image from 'next/image';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GambleDocument, useGambleQuery } from 'src/generated/graphql';
import defaultCart from 'public/images/gamble/default.png';
import coin from 'public/images/gamble/coin.png';

interface CartProps {
  id: string;
  image: string;
  value: number;
  suit: number;
  suitValue: number;
}

const ThreeTree = () => {
  const [open, setOpen] = useState(0);
  const [coinValue, setCoinValue] = useState(100);
  const { data, loading } = useGambleQuery();

  let getRandomArray: CartProps[] = data!
    .gamble!.slice(0, data!.gamble!.length)
    .sort(function () {
      return Math.random() - 0.5;
    });
  const [randomArray, setRandomArray] = useState<CartProps[]>(getRandomArray);

  const me = {
    name: 'Bạn',
    card: [randomArray[0], randomArray[4], randomArray[8]],
  };
  const person1 = {
    name: 'Thằng bên trái',
    card: [randomArray[1], randomArray[5], randomArray[9]],
  };
  const person2 = {
    name: 'Thằng đối diện',
    card: [randomArray[2], randomArray[6], randomArray[10]],
  };
  const person3 = {
    name: 'Thằng bên phải',
    card: [randomArray[3], randomArray[7], randomArray[11]],
  };

  const allPerson = [me, person1, person2, person3];

  let numMe: number | string = (
    me.card[0].value +
    me.card[1].value +
    me.card[2].value
  ).toString();
  numMe = numMe[numMe.length - 1];
  if (parseInt(numMe) === 0) numMe = 10;
  else numMe = parseInt(numMe);
  let num1: string | number = (
    person1.card[0].value +
    person1.card[1].value +
    person1.card[2].value
  ).toString();
  num1 = num1[num1.length - 1];
  if (parseInt(num1) === 0) num1 = 10;
  else num1 = parseInt(num1);

  let num2: string | number = (
    person2.card[0].value +
    person2.card[1].value +
    person2.card[2].value
  ).toString();
  num2 = num2[num2.length - 1];
  if (parseInt(num2) === 0) num2 = 10;
  else num2 = parseInt(num2);

  let num3: string | number = (
    person3.card[0].value +
    person3.card[1].value +
    person3.card[2].value
  ).toString();
  num3 = num3[num3.length - 1];
  if (parseInt(num3) === 0) num3 = 10;
  else num3 = parseInt(num3);

  let tempArray = [numMe, num1, num2, num3];
  let winner = tempArray.indexOf(Math.max(...tempArray));
  let objWinner = allPerson[winner];
  let maxNum = Math.max(...tempArray);
  let winnerArray = [];
  winnerArray.push(allPerson[winner]);
  for (let i = winner + 1; i < tempArray.length; i++) {
    if (tempArray[i] === maxNum) {
      winnerArray.push(allPerson[i]);
    }
  }
  if (winnerArray.length > 1) {
    winner = 0;
    objWinner = winnerArray[0];
    let maxSuit = 0;
    let maxSuitValue = 0;

    for (let i = 0; i < 3; i++) {
      if (winnerArray[0].card[i].suit > maxSuit) {
        maxSuit = winnerArray[0].card[i].suit;
        maxSuitValue = winnerArray[0].card[i].suitValue;
      }
    }

    for (let i = 1; i < winnerArray.length; i++) {
      for (let x = 0; x < 3; x++) {
        if (maxSuit < winnerArray[i].card[x].suit) {
          maxSuit = winnerArray[i].card[x].suit;
          maxSuitValue = winnerArray[i].card[x].suitValue;
          objWinner = winnerArray[i];
        } else if (maxSuit === winnerArray[i].card[x].suit) {
          if (maxSuitValue < winnerArray[i].card[x].suitValue) {
            maxSuitValue = winnerArray[i].card[x].suitValue;
            objWinner = winnerArray[i];
          }
        }
      }
    }
  }

  let moreOrLess = 0;
  if (open === 2) {
    if (objWinner.name === 'Bạn') moreOrLess = 29;
    else moreOrLess = -10;
  } else {
    moreOrLess = 0;
  }

  if (loading) return <div>...loading</div>;
  else
    return (
      <main className='flex justify-center items-center w-screen h-screen bg-black-900'>
        <div className='w-9/12 h-8/12 shadow-darkout rounded-full'>
          {open === 3 && (
            <div className='absolute w-full h-full text-gold text-7xl top-0 left-0 right-0 z-10 flex flex-col justify-center items-center'>
              <h3>{objWinner.name} Win!</h3>
              <button
                className='text-4xl mt-4 text-red-500 hover:text-orange'
                onClick={() => {
                  setOpen(0), setRandomArray(getRandomArray);
                }}
              >
                {objWinner.name === 'Bạn'
                  ? 'Gấp đôi đến chết'
                  : 'Còn thở là còn gỡ'}
              </button>
            </div>
          )}
          <div className='w-full h-full bg-green-700 border-20 border-black-500 rounded-full shadow-darkin flex justify-center items-center'>
            <div className='w-8/12 h-6/12 border border-green-600 rounded-full flex flex-col items-center'>
              <section className='h-4/12 w-4/12 flex justify-between -translate-y-36'>
                <article className='w-20 h-28'>
                  <Image
                    loader={() => person2.card[0].image}
                    src={open > 2 ? person2.card[0].image : defaultCart}
                    alt={person2.card[0].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
                <article className='w-20 h-28'>
                  <Image
                    loader={() => person2.card[1].image}
                    src={open > 2 ? person2.card[1].image : defaultCart}
                    alt={person2.card[1].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
                <article className='w-20 h-28'>
                  <Image
                    loader={() => person2.card[2].image}
                    src={open > 2 ? person2.card[2].image : defaultCart}
                    alt={person2.card[2].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
              </section>
              <section className='h-4/12 w-full flex justify-between'>
                <div className='rotate-90 flex w-4/12 justify-between -translate-x-48 2xl:-translate-x-60'>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person1.card[0].image}
                      src={open > 2 ? person1.card[0].image : defaultCart}
                      alt={person1.card[0].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person1.card[1].image}
                      src={open > 2 ? person1.card[1].image : defaultCart}
                      alt={person1.card[1].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person1.card[2].image}
                      src={open > 2 ? person1.card[2].image : defaultCart}
                      alt={person1.card[2].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                </div>
                <div className='rotate-90 flex w-4/12 justify-between translate-x-52 2xl:translate-x-64'>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person3.card[0].image}
                      src={open > 2 ? person3.card[0].image : defaultCart}
                      alt={person3.card[0].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person3.card[1].image}
                      src={open > 2 ? person3.card[1].image : defaultCart}
                      alt={person3.card[1].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                  <article className='w-20 h-28'>
                    <Image
                      loader={() => person3.card[2].image}
                      src={open > 2 ? person3.card[2].image : defaultCart}
                      alt={person3.card[2].id}
                      layout='responsive'
                      width={2}
                      height={3}
                      unoptimized
                    />
                  </article>
                </div>
              </section>
              <section className='h-4/12 w-4/12 flex justify-center translate-y-28 mt-2'>
                <article
                  className={
                    open > 0
                      ? 'w-20 h-28 -translate-x-8 duration-1000'
                      : 'w-20 h-28 translate-x-20'
                  }
                >
                  <Image
                    loader={() => me.card[0].image}
                    src={me.card[0].image}
                    alt={me.card[0].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
                <article
                  className='w-20 h-28 relative z-10 cursor-pointer'
                  onClick={() => {
                    setOpen(open + 1), setCoinValue(coinValue + moreOrLess);
                  }}
                >
                  <Image
                    loader={() => me.card[1].image}
                    src={me.card[1].image}
                    alt={me.card[1].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
                <article
                  className={
                    open > 1
                      ? 'w-20 h-28 translate-x-8 duration-1000'
                      : 'w-20 h-28 -translate-x-20'
                  }
                >
                  <Image
                    loader={() => me.card[2].image}
                    src={me.card[2].image}
                    alt={me.card[2].id}
                    layout='responsive'
                    width={2}
                    height={3}
                    unoptimized
                  />
                </article>
              </section>
              <div className='w-20 translate-x-60 translate-y-0 2xl:translate-y-12'>
                <Image
                  src={coin}
                  alt='coin'
                  layout='responsive'
                  width={2}
                  height={1.5}
                  objectFit='cover'
                  unoptimized
                />
                <p className='text-xl text-gold font-bold'>{coinValue}$</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GambleDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default ThreeTree;
