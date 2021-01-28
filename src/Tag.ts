/*!
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export interface Tag {
  readonly key: string;
  readonly overridable: boolean;
  val: string;
}

export default {
  httpURLKey: 'http.url',
  httpMethodKey: 'http.method',  // TODO: maybe find a better place to put these?

  httpStatusCode(val: string | number | undefined): Tag {
    return {
      key: 'http.status.code',
      overridable: true,
      val: `${val}`,
    } as Tag;
  },
  httpStatusMsg(val: string | undefined): Tag {
    return {
      key: 'http.status.msg',
      overridable: true,
      val: `${val}`,
    } as Tag;
  },
  httpURL(val: string | undefined): Tag {
    return {
      key: this.httpURLKey,
      overridable: true,
      val: `${val}`,
    } as Tag;
  },
  httpMethod(val: string | undefined): Tag {
    return {
      key: this.httpMethodKey,
      overridable: true,
      val: `${val}`,
    } as Tag;
  },
  dbType: (val: string | undefined): Tag => {
    return {
      key: 'db.type',
      overridable: true,
      val: `${val}`,
    };
  },
  dbInstance: (val: string | undefined): Tag => {
    return {
      key: 'db.instance',
      overridable: true,
      val: `${val}`,
    };
  },
  dbStatement: (val: string | undefined): Tag => {
    return {
      key: 'db.statement',
      overridable: true,
      val: `${val}`,
    };
  },
};
