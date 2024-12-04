/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * DBTCloud Connection Config
 */
export interface DbtCloudConnection {
    /**
     * ID of your DBT cloud account
     */
    accountId: string;
    /**
     * DBT cloud Metadata API URL.
     */
    discoveryAPI: string;
    /**
     * DBT cloud Access URL.
     */
    host: string;
    /**
     * List of IDs of your DBT cloud jobs seperated by comma `,`
     */
    jobIds?: string[];
    /**
     * List of IDs of your DBT cloud projects seperated by comma `,`
     */
    projectIds?: string[];
    /**
     * Generated Token to connect to DBTCloud.
     */
    token: string;
    /**
     * Service Type
     */
    type?: DBTCloudType;
}

/**
 * Service Type
 *
 * Service type.
 */
export enum DBTCloudType {
    DBTCloud = "DBTCloud",
}