import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { after, afterEach, before, beforeEach, describe, it } from "mocha";
import * as sinon from "sinon";
export  { sinon, chaiAsPromised, chai, describe, it, before, after, beforeEach, afterEach };
export const testData = `This is a test line 1 \r\n
                        This is test line 2\r\n
                        This is test line 3\r\n
                        This is new line and has some <td> test </td>`;
