using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Change_datatype_of_nextBillingDate_to_string : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "69c4e922-7cb9-4e74-a919-ec763d4bb0c8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ccc80dec-3c51-4f89-ba92-036a67a155f6");

            migrationBuilder.AlterColumn<string>(
                name: "NextBillingDate",
                table: "Subscriptions",
                type: "text",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1e1c6ba0-ef82-4f74-89ee-8bea1a540145", null, "Admin", "ADMIN" },
                    { "8c7e1a02-de3b-44a7-97c3-ccec8dae3907", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1e1c6ba0-ef82-4f74-89ee-8bea1a540145");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8c7e1a02-de3b-44a7-97c3-ccec8dae3907");

            migrationBuilder.AlterColumn<DateTime>(
                name: "NextBillingDate",
                table: "Subscriptions",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "69c4e922-7cb9-4e74-a919-ec763d4bb0c8", null, "User", "USER" },
                    { "ccc80dec-3c51-4f89-ba92-036a67a155f6", null, "Admin", "ADMIN" }
                });
        }
    }
}
