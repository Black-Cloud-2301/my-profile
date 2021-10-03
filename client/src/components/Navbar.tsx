import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <div
        className='fixed z-20 right-4 top-4 h-5 w-7 cursor-pointer transition duration-500 ease-in-out lg:hidden'
        onClick={() => setOpen(!open)}
      >
        <span
          className={
            open
              ? 'absolute right-0 top-2 w-7 h-1 bg-white transition duration-500 ease-in-out before:absolute before:-top-2 before:w-7 before:h-1 before:bg-white before:transition before:duration-500 before:ease-in-out after:absolute after:top-2 after:w-7 after:h-1 after:bg-white after:transition after:duration-500 after:ease-in-out rotate-720 bg-transparent before:rotate-45  before:translate-y-2 after:-rotate-45 after:-translate-y-2'
              : 'absolute right-0 top-2 w-7 h-1 bg-white transition duration-500 ease-in-out before:absolute before:-top-2 before:w-7 before:h-1 before:bg-white before:transition before:duration-500 before:ease-in-out after:absolute after:top-2 after:w-7 after:h-1 after:bg-white after:transition after:duration-500 after:ease-in-out'
          }
        />
      </div>
      <nav
        className={
          open
            ? 'fixed z-10 top-0 left-0 w-screen opacity-95'
            : 'fixed z-10 top-0 left-0 w-screen opacity-95 pointer-events-none lg:pointer-events-auto'
        }
      >
        <ul
          className={
            open
              ? 'flex flex-col flex-wrap justify-center z-10 h-screen bg-black-900 list-none pr-4 transform translate-y-0 transition duration-500 ease-in-out'
              : 'flex flex-col flex-wrap justify-center z-10 h-screen bg-black-900 list-none pr-4 transform -translate-y-full transition duration-500 ease-in-out lg:block lg:translate-y-0 lg:h-full lg:bg-transparent lg:text-right'
          }
        >
          <li
            className={
              open
                ? 'w-full text-center transition delay-200 duration-500 ease-in-out '
                : 'w-full text-center transform translate-x-full transition delay-200 duration-500 ease-in-out lg:translate-x-0 lg:inline lg:pr-6 invisible lg:visible'
            }
          >
            <Link href='/'>
              <a
                className={
                  active === 0
                    ? 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-orange'
                    : 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-white hover:text-orange'
                }
                onClick={() => {
                  setActive(0);
                  setOpen(false);
                }}
              >
                home
              </a>
            </Link>
          </li>
          <li
            className={
              open
                ? 'w-full text-center transition delay-300 duration-500 ease-in-out lg:inline lg:pr-6'
                : 'w-full text-center transform translate-x-full transition delay-300 duration-500 ease-in-out lg:translate-x-0 lg:inline lg:pr-6 invisible lg:visible'
            }
          >
            <Link href='/projects'>
              <a
                className={
                  active === 1
                    ? 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-orange'
                    : 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-white hover:text-orange'
                }
                onClick={() => {
                  setActive(1);
                  setOpen(false);
                }}
              >
                my projects
              </a>
            </Link>
          </li>
          <li
            className={
              open
                ? 'w-full text-center transition delay-400 duration-500 ease-in-out lg:inline lg:pr-6'
                : 'w-full text-center transform translate-x-full transition delay-400 duration-500 ease-in-out lg:translate-x-0 lg:inline lg:pr-6 invisible lg:visible'
            }
          >
            <Link href='/about'>
              <a
                className={
                  active === 2
                    ? 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-orange'
                    : 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-white hover:text-orange'
                }
                onClick={() => {
                  setActive(2);
                  setOpen(false);
                }}
              >
                about me
              </a>
            </Link>
          </li>
          <li
            className={
              open
                ? 'w-full text-center transition delay-500 duration-500 ease-in-out lg:inline lg:pr-6'
                : 'w-full text-center transform translate-x-full transition delay-500 duration-500 ease-in-out lg:translate-x-0 lg:inline lg:pr-6 invisible lg:visible'
            }
          >
            <Link href='/contact'>
              <a
                className={
                  active === 3
                    ? 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-orange'
                    : 'inline-block text-3xl uppercase py-4 transition duration-500 ease-in-out text-white hover:text-orange'
                }
                onClick={() => {
                  setActive(3);
                  setOpen(false);
                }}
              >
                contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
