## Typescript support

Easy Filter 1.5.7 starts typescript support.

## Installation

```ts
import Vue from 'vue';
import EasyFilter from 'easy-filter';
Vue.use(EasyFilter)
```

## On demand

```ts
import Vue from 'vue';
import {
  number,
  currency,
} from 'easy-filter';

import {
  NumberDate,
  NumberOptions,
  CurrencyOption,
} from 'easy-filter/types';

interface EasyFilter {
  number(input: NumberDate, digits?: number | undefined, options?: NumberOptions | undefined): string;
  currency(
    input: NumberDate,
    symbol?: string | undefined,
    digits?: number | undefined,
    options?: CurrencyOption | undefined): string;
}
declare module 'vue/types/vue' {
  interface Vue {
    $myEasyFilter: EasyFilter;
  }
  interface VueConstructor {
    myEasyFilter: EasyFilter;
  }
}

const myEasyFilter = {
  number,
  currency,
};

Vue.filter('number', number);
Vue.filter('currency', currency);
Vue.prototype.$myEasyFilter = Vue.myEasyFilter = myEasyFilter;
```

## Types

```ts
export type NumberDate = number | string;
export type WeekConfig = 'cn' | 'en' | DateOption;
export type DateData = NumberDate | Date;

export interface CurrencyOption {
  [key: string]: any;
  symbolOnLeft: boolean;
  separator: string;
  addSpace: boolean;
  pad: boolean;
  round: boolean;
}

export interface DateOption {
  [key: string]: string[];
  week: string[];
  shortWeek: string[];
}

export interface DateOptions {
  [key: string]: DateOption;
  cn: DateOption;
  en: DateOption;
}

export type Comparator = (item1: any, item2: any, key: string, reverse?: boolean) => number;

export type MatchFunction = (val: any) => boolean;

export type Match = string | MatchFunction;

export interface MatchRules {
   match: Match;
   ignore?: string[] | string;
}

export interface SignOption {
  zero: string;
}

export type Sign = SignOption | boolean;
export interface NumberOptions {
  round?: boolean;
  pad?: boolean;
  sign?: Sign;
  separator?: string;
}

export interface LimitToOption {
  startWithIndex: number;
  startWith?: any;
  ignore?: string | RegExp;
  cut?: boolean;
}

export type FilterOptions = MatchRules | Match | RegExp;

export function install(vue: typeof Vue): void;

export declare interface EasyFilter {

  currency(input: NumberDate, symbol?: string, digits?: number, options?: CurrencyOption ): string;

  date(input: DateData, formatMode?: string, option?: WeekConfig): DateData;

  orderBy(input: any[],
          expression?: Comparator | string,
          reverse?: boolean,
          comparator?: Comparator | string,
          ): any[];

  filter(input: any, matchOptions?: FilterOptions): any;
  
  number(
    input: NumberDate,
    digits?: number,
    options?: NumberOptions,
  ): string;

  limitTo(
    input: number | string | any[],
    limit?: number,
    option?: LimitToOption,
  ): string | number | any[]

  uppercase(input: string, start?: number, end?: number): string

  lowercase(input: string, start?: number, end?: number): string
}

export function currency(input: NumberDate, symbol?: string, digits?: number, options?: CurrencyOption ): string;

export function date(input: DateData, formatMode?: string, option?: WeekConfig): DateData;

export function orderBy(input: any[],
                        expression?: Comparator | string,
                        reverse?: boolean,
                        comparator?: Comparator | string,
                        ): any[];

export function filter(input: any, matchOptions?: FilterOptions): any;

export function number(
                        input: NumberDate,
                        digits?: number,
                        options?: NumberOptions,
                      ): string;

export function limitTo(
  input: number | string | any[],
  limit?: number,
  option?: LimitToOption,
): string | number | any[];

export function uppercase(input: string, start?: number, end?: number): string;

export function lowercase(input: string, start?: number, end?: number): string;
```