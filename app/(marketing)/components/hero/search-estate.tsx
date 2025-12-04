"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, ChevronDown, Home, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

const transactionTypes = {
  buy: "Acheter",
  rent: "Louer",
};

const propertyTypes = {
  house: "Maison",
  apartment: "Appartement",
  villa: "Villa",
  studio: "Studio",
  loft: "Loft",
};

type TransactionType = keyof typeof transactionTypes;
type PropertyType = keyof typeof propertyTypes;

const formSchema = z.object({
  location: z.string().min(1, {
    message: "Veuillez saisir une localisation.",
  }),
  transactionType: z.enum(["buy", "rent"]),
  propertyTypes: z
    .array(z.enum(["house", "apartment", "villa", "studio", "loft"]))
    .min(1, {
      message: "Veuillez sélectionner au moins un type de bien.",
    }),
});

function renderPropertyTypes(value: PropertyType[]) {
  if (value.length === 0) {
    return "Type de bien";
  }
  const firstType = propertyTypes[value[0]];
  const additionalTypes = value.length > 1 ? ` (+${value.length - 1})` : "";
  return firstType + additionalTypes;
}

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

export default function SearchEstate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      transactionType: "buy" as TransactionType,
      propertyTypes: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const propertyTypeValues = Object.keys(propertyTypes) as PropertyType[];

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2 flex-wrap"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[200px]">
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher une localisation"
                      className="pl-10 pr-10 rounded-lg"
                      {...field}
                    />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transactionType"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[150px]">
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="rounded-lg">
                      <Building2 className="size-4 text-muted-foreground" />
                      <SelectValue placeholder="Transaction" />
                      <SelectIcon>
                        <ChevronDown className="size-4" />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectPopup>
                      <SelectList>
                        {Object.entries(transactionTypes).map(
                          ([key, label]) => (
                            <SelectItem key={key} value={key}>
                              <SelectItemText>{label}</SelectItemText>
                            </SelectItem>
                          )
                        )}
                      </SelectList>
                    </SelectPopup>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyTypes"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[150px]">
                <FormControl>
                  <Select
                    multiple
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger className="rounded-lg min-w-[150px]">
                      <Home className="size-4 text-muted-foreground" />
                      <SelectValue>
                        {renderPropertyTypes(field.value as PropertyType[])}
                      </SelectValue>
                      <SelectIcon>
                        <ChevronUpDownIcon />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectPopup>
                      <SelectList>
                        {propertyTypeValues.map((value) => (
                          <SelectItem key={value} value={value}>
                            <SelectItemText className="col-start-2 flex flex-col items-start gap-0.5">
                              <span className="text-sm leading-6">
                                {propertyTypes[value]}
                              </span>
                            </SelectItemText>
                            <SelectItemIndicator className="col-start-1 flex items-center self-start relative top-[0.4em]">
                              <CheckIcon className="size-3" />
                            </SelectItemIndicator>
                          </SelectItem>
                        ))}
                      </SelectList>
                    </SelectPopup>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-black text-white hover:bg-black/90 rounded-lg px-6"
          >
            Trouver un bien
          </Button>
        </form>
      </Form>
    </div>
  );
}
