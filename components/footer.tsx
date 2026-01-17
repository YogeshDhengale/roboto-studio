import { footerSections } from "@/lib/data";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group-item";

const id = "id";

const Footer = () => {
  return (
    <footer className="py-20 px-5 gap-5 bg-primary">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p  className="text-muted-foreground">Tel: +44 (0) 207 730 2122</p>
            <p className="text-muted-foreground"> 95–97 Pimlico Rd London SW1W 8PH</p>
          </div>
          <div className="col-span-2">
            <p className="text-muted-foreground">hello@jamb.co.uk</p>
          </div>
          <div className="col-span-2">
            <div className="*:not-first:mt-4">
              <Label htmlFor={id}  className="text-muted-foreground">Newsletter</Label>
              <div className="flex rounded-md shadow-xs">
                <Input
                  className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                  id={id}
                  placeholder="Search"
                />
                <Button type="button">Subscribe</Button>
              </div>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id={`${id}-1`} value="1" />
                  <Label htmlFor={`${id}-1`} className="text-muted-foreground">I agree to our Privacy Policy</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.map((item) => (
                <div key={item.title} className="pt-4 border-t-2 border-muted-foreground">
                  <h3 className="font-medium mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-muted"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {item.footerLink && (
                    <a
                      href="#"
                      className="mt-4 block text-sm font-medium underline"
                    >
                      {item.footerLink}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
