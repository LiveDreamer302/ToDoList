using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Identity.Migrations
{
    /// <inheritdoc />
    public partial class AddedTaskDbSet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomTask_Rooms_RoomId",
                table: "RoomTask");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RoomTask",
                table: "RoomTask");

            migrationBuilder.RenameTable(
                name: "RoomTask",
                newName: "Tasks");

            migrationBuilder.RenameIndex(
                name: "IX_RoomTask_RoomId",
                table: "Tasks",
                newName: "IX_Tasks_RoomId");

            migrationBuilder.AlterColumn<int>(
                name: "RoomId",
                table: "Tasks",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tasks",
                table: "Tasks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Rooms_RoomId",
                table: "Tasks",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Rooms_RoomId",
                table: "Tasks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tasks",
                table: "Tasks");

            migrationBuilder.RenameTable(
                name: "Tasks",
                newName: "RoomTask");

            migrationBuilder.RenameIndex(
                name: "IX_Tasks_RoomId",
                table: "RoomTask",
                newName: "IX_RoomTask_RoomId");

            migrationBuilder.AlterColumn<int>(
                name: "RoomId",
                table: "RoomTask",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RoomTask",
                table: "RoomTask",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomTask_Rooms_RoomId",
                table: "RoomTask",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
