using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class change_column_name_in_Notificatoins_table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "028b4bb1-4580-4778-addf-1670f867f39d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0694f308-96a2-462c-9225-94e5a3ca2e0a");

            migrationBuilder.RenameColumn(
                name: "NotificationID",
                table: "Notifications",
                newName: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "69c4e922-7cb9-4e74-a919-ec763d4bb0c8", null, "User", "USER" },
                    { "ccc80dec-3c51-4f89-ba92-036a67a155f6", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "69c4e922-7cb9-4e74-a919-ec763d4bb0c8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ccc80dec-3c51-4f89-ba92-036a67a155f6");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Notifications",
                newName: "NotificationID");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "028b4bb1-4580-4778-addf-1670f867f39d", null, "Admin", "ADMIN" },
                    { "0694f308-96a2-462c-9225-94e5a3ca2e0a", null, "User", "USER" }
                });
        }
    }
}
