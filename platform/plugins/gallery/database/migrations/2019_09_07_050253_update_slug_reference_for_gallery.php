<?php

use Illuminate\Database\Migrations\Migration;

class UpdateSlugReferenceForGallery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('slugs')->where('reference_type', 'gallery')->update(['reference_type' => \ZHXCore\Gallery\Models\Gallery::class]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('slugs')->where('reference_type', \ZHXCore\Gallery\Models\Gallery::class)->update(['reference_type' => 'gallery']);
    }
}
