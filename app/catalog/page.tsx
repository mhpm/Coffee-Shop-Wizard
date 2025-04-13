import Button from '@/app/catalog/button';

const CatalogPage = () => {
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <div className="flex items-start flex-wrap justify-center gap-5">
        <div>
          <Button>Solid</Button>
          <Button variant="faded">Faded</Button>
          <Button variant="bordered">Bordered</Button>
          <Button variant="light">Light</Button>
          <Button variant="flat">Flat</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="shadow">Shadow</Button>
        </div>

        <div>
          <Button disabled>Solid</Button>
          <Button disabled variant="faded">
            Faded
          </Button>
          <Button disabled variant="bordered">
            Bordered
          </Button>
          <Button disabled variant="light">
            Light
          </Button>
          <Button disabled variant="flat">
            Flat
          </Button>
          <Button disabled variant="ghost">
            Ghost
          </Button>
          <Button disabled variant="shadow">
            Shadow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
