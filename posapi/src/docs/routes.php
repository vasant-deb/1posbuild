<?php

/**
 * @SWG\Swagger(
 *      basePath="",
 *      host="localhost:8081",
 *      schemes={"http"},
 *      consumes={"application/json"},
 *      @SWG\Info(
 *          title="Test API",
 *          description="REST API",
 *          version="1.0",
 *          termsOfService="terms",
 *          @SWG\License(name="proprietary")
 *      )
 *
 * )
 */

/**
 * @SWG\SecurityScheme(
 *   securityDefinition="MyHeaderAuthentication",
 *   type="apiKey",
 *   in="header",
 *   name="Authorization"
 * )
 */

 /**
 *    @SWG\Post(
 *      path="/registration",
 *      tags={"registration"},
 *      operationId="getRegistration",
 *      summary="User registration api",
 *		consumes={"application/x-www-form-urlencoded"}, 
 *
 *
 *       @SWG\Parameter(
 *          name="firstName",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="user first name"
 *      ),
 *       @SWG\Parameter(
 *          name="lastName",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="user last name"
 *      ),
 *       @SWG\Parameter(
 *          name="email",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="user email"
 *      ),
 *       @SWG\Parameter(
 *          name="password",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="password"
 *      ),
 *
 *
 *      @SWG\Response(
 *           description="{""error"":false,""message"":""Registration successfully.""}",
 *           response=200,
 *      ),
 *      @SWG\Response(
 *           description="{""error"":true,""message"":""Required field(s) password is missing or empty""}",
 *           response=403,
 *      ),
 *      @SWG\Definition(
 *           definition="User",
 *           allOf={
 *             @SWG\Schema(ref="#/definitions/User"),
 *           },
 *        @SWG\Property(
 *           property="user",
 *           description="?????",
 *           ref="#/definitions/User"
 *         )
 *      )
 * )
 */



 /**
 *    @SWG\Post(
 *      path="/login",
 *      tags={"login"},
 *      operationId="getLogin",
 *      summary="User login api",
 *		consumes={"application/x-www-form-urlencoded"},
 *
 *
 *       @SWG\Parameter(
 *          name="email",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="user email"
 *      ),
 *       @SWG\Parameter(
 *          name="password",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="password"
 *      ),
 *
 *
 *      @SWG\Response(
 *           description="{""token"": ""eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJpYXQi...........""}",
 *           response=200,
 *      ),
 *      @SWG\Response(
 *           description="{""error"":true,""message"":""Password do not match our records.""}",
 *           response=403,
 *      ),
 * )
 */


  /**
 *    @SWG\Post(
 *      path="/api/demo",
 *      tags={"demo"},
 *      operationId="getDemo",
 *      summary="Demo API",
 *      security={{"MyHeaderAuthentication":{}}},
 *		consumes={"application/x-www-form-urlencoded"}, 
 *
 *       @SWG\Parameter(
 *          name="param1",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="Parameter 1"
 *      ),
 *       @SWG\Parameter(
 *          name="param2",
 *          in="formData",
 *          required=true,
 *          type="string",
 *          description="Parameter 2"
 *      ),
 *
 *
 *      @SWG\Response(
 *           description="{""token"": ""eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJpYXQi...........""}",
 *           response=200,
 *      ),
 *      @SWG\Response(
 *           description="{""error"":true,""message"":""Password do not match our records.""}",
 *           response=403,
 *      ),
 * )
 */