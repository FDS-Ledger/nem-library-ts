/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {MosaicDefinitionDTO} from "../asset/MosaicDefinitionDTO";
import {TransactionDTO} from "./TransactionDTO";
/**
 * @internal
 * Before a asset can be created or transferred, a corresponding definition of the asset has to be created and published to the network.
 * This is done via a asset definition creation transaction.
 */
export interface MosaicDefinitionCreationTransactionDTO extends TransactionDTO {

  /**
   * The fee for the creation of the asset.
   */
  readonly creationFee: number;

  /**
   * The public key of the account to which the creation fee is tranferred.
   */
  readonly creationFeeSink: string;

  /**
   * The actual asset definition
   */
  readonly mosaicDefinition: MosaicDefinitionDTO;

}
