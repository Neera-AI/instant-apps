import PizzaApp from "@felvin-community/pizza-app";
import YcCompany from "@felvin-community/yc-company";
import ContactMailer from "@felvin-community/contact-mailer";
import FundRaiserApp from "@felvin-community/fund-raiser-app";
import CodeSnippets from "@felvin-community/code-snippets";
import AddressPincodes from "@felvin-community/address-pincodes";
import AsciiArt from "@felvin-community/ascii-art";
import Bmiconverter from "@felvin-community/bmiconverter";
import BouncyBall from "@felvin-community/bouncy-ball";
import Capitals from "@felvin-community/capitals";
import CodeReference from "@felvin-community/code-reference";
import ColorPicker from "@felvin-community/color-picker";
import CompetitiveContestApp from "@felvin-community/competitive-contest-app";
import Compressify from "@felvin-community/compressify";
import ConvertToRoman from "@felvin-community/convert-to-roman";
import CorruptPdf from "@felvin-community/corrupt-pdf";
import CourierTracker from "@felvin-community/courier-tracker";
import CronParser from "@felvin-community/cron-parser";
import CropImage from "@felvin-community/crop-image";
import Crypto from "@felvin-community/crypto";
import CsvToJson from "@felvin-community/csv-to-json";
import CurrencyConvertor from "@felvin-community/currency-convertor";
import DiceRoller from "@felvin-community/dice-roller";
import Dictionary from "@felvin-community/dictionary";
import FlappyBird from "@felvin-community/flappy-bird";
import FlipACoin from "@felvin-community/flip-a-coin";
import GithubUser from "@felvin-community/github-user";
import GraphPlotter from "@felvin-community/graph-plotter";
import HelloWorldInDifferentLanguages from "@felvin-community/hello-world-in-different-languages";
import HttpStatusCodes from "@felvin-community/http-status-codes";
import ImageUploader from "@felvin-community/image-uploader";
import IpAddress from "@felvin-community/ip-address";
import IsPrime from "@felvin-community/is-prime";
import IsbnBookInfo from "@felvin-community/isbn-book-info";
import JokeGenerator from "@felvin-community/joke-generator";
import JsonFormatter from "@felvin-community/json-formatter";
import JsonToCsv from "@felvin-community/json-to-csv";
import JsonToYaml from "@felvin-community/json-to-yaml";
import JwtDecoder from "@felvin-community/jwt-decoder";
import LatexRender from "@felvin-community/latex-render";
import LiveMarkdown from "@felvin-community/live-markdown";
import LoremIpsumGenerator from "@felvin-community/lorem-ipsum-generator";
import MarkdownToHtml from "@felvin-community/markdown-to-html";
import Math from "@felvin-community/math";
import MergePdfs from "@felvin-community/merge-pdfs";
import Metronome from "@felvin-community/metronome";
import Minesweeper from "@felvin-community/minesweeper";
import MorseCodeGenerator from "@felvin-community/morse-code-generator";
import NasaAstroPic from "@felvin-community/nasa-astro-pic";
import Pacman from "@felvin-community/pacman";
import Pokedex from "@felvin-community/pokedex";
import Pomodoro from "@felvin-community/pomodoro";
import QrCodeGenerator from "@felvin-community/qr-code-generator";
import RandomStringGenerator from "@felvin-community/random-string-generator";
import Regex from "@felvin-community/regex";
import ScreenSize from "@felvin-community/screen-size";
import SnakeGame from "@felvin-community/snake-game";
import Stopwatch from "@felvin-community/stopwatch";
import Sudoku from "@felvin-community/sudoku";
import Tetris from "@felvin-community/tetris";
import TextSentimentAnalyser from "@felvin-community/text-sentiment-analyser";
import TicTacToe from "@felvin-community/tic-tac-toe";
import TimeAtPlace from "@felvin-community/time-at-place";
import Timer from "@felvin-community/timer";
import TrendingOnGithub from "@felvin-community/trending-on-github";
import TvShows from "@felvin-community/tv-shows";
import UnitConvertor from "@felvin-community/unit-convertor";
import UnitSystem from "@felvin-community/unit-system";
import UnixTimestamp from "@felvin-community/unix-timestamp";
import UrlEncoderDecoder from "@felvin-community/url-encoder-decoder";
import UrlShortener from "@felvin-community/url-shortener";
import Uuid from "@felvin-community/uuid";
import WebsiteIcons from "@felvin-community/website-icons";
import WeightConverter from "@felvin-community/weight-converter";
import WhatDay from "@felvin-community/what-day";
import WordCounter from "@felvin-community/word-counter";
import WordleSolver from "@felvin-community/wordle-solver";

const allApps = [
  PizzaApp,
  YcCompany,
  ContactMailer,
  FundRaiserApp,
  CodeSnippets,
  AddressPincodes,
  AsciiArt,
  Bmiconverter,
  BouncyBall,
  Capitals,
  CodeReference,
  ColorPicker,
  CompetitiveContestApp,
  Compressify,
  ConvertToRoman,
  CorruptPdf,
  CourierTracker,
  CronParser,
  CropImage,
  Crypto,
  CsvToJson,
  CurrencyConvertor,
  DiceRoller,
  Dictionary,
  FlappyBird,
  FlipACoin,
  GithubUser,
  GraphPlotter,
  HelloWorldInDifferentLanguages,
  HttpStatusCodes,
  ImageUploader,
  IpAddress,
  IsPrime,
  IsbnBookInfo,
  JokeGenerator,
  JsonFormatter,
  JsonToCsv,
  JsonToYaml,
  JwtDecoder,
  LatexRender,
  LiveMarkdown,
  LoremIpsumGenerator,
  MarkdownToHtml,
  Math,
  MergePdfs,
  Metronome,
  Minesweeper,
  MorseCodeGenerator,
  NasaAstroPic,
  Pacman,
  Pokedex,
  Pomodoro,
  QrCodeGenerator,
  RandomStringGenerator,
  Regex,
  ScreenSize,
  SnakeGame,
  Stopwatch,
  Sudoku,
  Tetris,
  TextSentimentAnalyser,
  TicTacToe,
  TimeAtPlace,
  Timer,
  TrendingOnGithub,
  TvShows,
  UnitConvertor,
  UnitSystem,
  UnixTimestamp,
  UrlEncoderDecoder,
  UrlShortener,
  Uuid,
  WebsiteIcons,
  WeightConverter,
  WhatDay,
  WordCounter,
  WordleSolver,
];

export default allApps;

export const appDetails = allApps.map(
  ({ id, name, description, screenshotPath, exampleSearchQueries }) => {
    const details = {
      id,
      name,
      description,
      screenshotPath,
      exampleSearchQueries,
    };
    details.screenshotPath =
      "https://raw.githubusercontent.com/felvin-search/instant-apps/master/apps/" +
      id.split("/")[1] +
      "/src" +
      screenshotPath?.substring(1);
    return details;
  }
);
