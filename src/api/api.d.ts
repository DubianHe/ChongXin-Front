type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class ContactsDTO {
    /** address */
    address?: string;

    /** emil */
    emil?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** phone */
    phone?: string;

    /** province */
    province?: string;

    /** workplace */
    workplace?: string;
  }

  export class ContactsProvinceVO {
    /** num */
    num?: number;

    /** province */
    province?: string;
  }

  export class ContactsQueryDTO {
    /** address */
    address?: string;

    /** emil */
    emil?: string;

    /** name */
    name?: string;

    /** page */
    page?: number;

    /** pageSize */
    pageSize?: number;

    /** phone */
    phone?: string;

    /** province */
    province?: string;

    /** workplace */
    workplace?: string;
  }

  export class ContactsQueryDTO0 {
    /** address */
    address?: string;

    /** emil */
    emil?: string;

    /** name */
    name?: string;

    /** phone */
    phone?: string;

    /** province */
    province?: string;

    /** workplace */
    workplace?: string;
  }

  export class ContactsVO {
    /** address */
    address?: string;

    /** emil */
    emil?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** phone */
    phone?: string;

    /** province */
    province?: string;

    /** workplace */
    workplace?: string;
  }

  export class DepartmentDTO {
    /** contact */
    contact?: string;

    /** contactPhone */
    contactPhone?: string;

    /** departmentName */
    departmentName?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;
  }

  export class DepartmentQueryDTO {
    /** departmentName */
    departmentName?: string;

    /** page */
    page?: number;

    /** pageSize */
    pageSize?: number;
  }

  export class DepartmentVO {
    /** contact */
    contact?: string;

    /** contactPhone */
    contactPhone?: string;

    /** createdAt */
    createdAt?: string;

    /** createdBy */
    createdBy?: string;

    /** departmentName */
    departmentName?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** updatedAt */
    updatedAt?: string;
  }

  export class Inquiry<T0 = any> {
    /** list */
    list?: Array<T0>;
  }

  export class Page<T0 = any> {
    /** list */
    list?: Array<T0>;

    /** page */
    page?: number;

    /** pageSize */
    pageSize?: number;

    /** total */
    total?: number;
  }

  export class Token {
    /** accessToken */
    accessToken?: string;

    /** lastAction */
    lastAction?: string;

    /** userCode */
    userCode?: string;

    /** userName */
    userName?: string;
  }

  export class Tongji<T0 = any> {
    /** list */
    list?: Array<T0>;
  }
}

declare namespace API {
  /**
   * Contacts Controller
   */
  export namespace contacts {
    /**
     * delete
     * /contacts/delete
     */
    export namespace remove {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: Array<number>,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * delete
     * /contacts/deleteByPrimaryKey
     */
    export namespace postDeleteByPrimaryKey {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: number,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * inquiry
     * /contacts/inquiry
     */
    export namespace inquiry {
      export class Params {}

      export type Response = defs.Inquiry<defs.ContactsVO>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ContactsQueryDTO0,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * insert
     * /contacts/insert
     */
    export namespace insert {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ContactsDTO,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * list
     * /contacts/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.Page<defs.ContactsVO>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ContactsQueryDTO,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * tongji
     * /contacts/tongji
     */
    export namespace tongji {
      export class Params {}

      export type Response = defs.Tongji<defs.ContactsProvinceVO>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * update
     * /contacts/updateByPrimaryKey
     */
    export namespace update {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ContactsDTO,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * Department Controller
   */
  export namespace department {
    /**
     * add
     * /department/add
     */
    export namespace add {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.DepartmentDTO,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * delete
     * /department/delete
     */
    export namespace remove {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: Array<number>,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * getByCode
     * /department/getByCode
     */
    export namespace getByCode {
      export class Params {}

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * insert
     * /department/insert1
     */
    export namespace insert {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ContactsDTO,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * list
     * /department/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.Page<defs.DepartmentVO>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.DepartmentQueryDTO,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * update
     * /department/update
     */
    export namespace update {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.DepartmentDTO,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * My Controller
   */
  export namespace my {
    /**
     * add
     * /user/add
     */
    export namespace add {
      export class Params {
        /** userName */
        userName?: string;
        /** persId */
        persId?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * System Controller
   */
  export namespace system {
    /**
     * login
     * /system/login
     */
    export namespace login {
      export class Params {
        /** userId */
        userId?: string;
        /** password */
        password?: string;
        /** group */
        group?: string;
      }

      export type Response = defs.Token;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * ping
     * /system/ping
     */
    export namespace ping {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }
}
