import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <img
          className=" h-[120px] w-[120px]"
          src="/logo-eduardo-white.png"
          alt="Avatar image"
          loading="lazy"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Facebook</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">LinkedIn</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
